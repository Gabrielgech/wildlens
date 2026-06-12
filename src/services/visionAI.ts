import { FAUNA, FLORA } from '../data/species'
import { Species } from '../types'

const AZURE_ENDPOINT = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT || ''
const AZURE_KEY = import.meta.env.VITE_AZURE_OPENAI_KEY || ''
const AZURE_DEPLOYMENT = import.meta.env.VITE_AZURE_DEPLOYMENT || 'gpt-4o'

export const VISION_DEMO_MODE = !AZURE_ENDPOINT || !AZURE_KEY

export interface VisionResult {
  species: Species
  confidence: number
  reasoning: string
}

export async function identifyFromImage(
  base64Image: string,
  mode: 'fauna' | 'flora' | 'ecosystem'
): Promise<VisionResult[]> {

  const database = mode === 'flora' ? FLORA : FAUNA
  const speciesList = database.map(s => 
    `- ID: ${s.id} | ${s.commonName} (${s.scientificName})`
  ).join('\n')

  if (VISION_DEMO_MODE) {
    return getDemoResults(mode)
  }

  try {
    const response = await fetch(
      `${AZURE_ENDPOINT}/openai/deployments/${AZURE_DEPLOYMENT}/chat/completions?api-version=2024-02-15-preview`,
      {
        method: 'POST',
        headers: {
          'api-key': AZURE_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          max_tokens: 500,
          messages: [{
            role: 'user',
            content: [
              {
                type: 'text',
                text: `You are a wildlife expert in Campeche, México.
Analyze this image and identify the species.
Match ONLY from this list:
${speciesList}

Respond ONLY with valid JSON, no other text:
{
  "matches": [
    {"id": "fauna_001", "confidence": 85, "reasoning": "reason"},
    {"id": "fauna_002", "confidence": 45, "reasoning": "reason"},
    {"id": "fauna_003", "confidence": 20, "reasoning": "reason"}
  ]
}`
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`,
                  detail: 'low'
                }
              }
            ]
          }]
        })
      }
    )

    const data = await response.json()
    const text = data.choices[0].message.content
    const parsed = JSON.parse(text.replace(/```json|```/g, '').trim())
    
    return parsed.matches
      .map((m: {id: string, confidence: number, reasoning: string}) => {
        const species = database.find(s => s.id === m.id)
        if (!species) return null
        return { species, confidence: m.confidence, reasoning: m.reasoning }
      })
      .filter(Boolean)
      .slice(0, 3)

  } catch (error) {
    console.error('Vision AI error:', error)
    return getDemoResults(mode)
  }
}

function getDemoResults(mode: string): VisionResult[] {
  const db = mode === 'flora' ? FLORA : FAUNA
  return [
    { species: db[0], confidence: 72, 
      reasoning: 'Características visuales compatibles (modo demo)' },
    { species: db[1], confidence: 45, 
      reasoning: 'Posible coincidencia por hábitat (modo demo)' },
    { species: db[2], confidence: 23, 
      reasoning: 'Especie común en la región (modo demo)' }
  ]
}
