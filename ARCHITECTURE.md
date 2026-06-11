
# WildLens — Architecture

## Overview

WildLens uses a dual-mode architecture designed for robust offline-first fieldwork with optional online enrichment. The app places core identification and journal features on-device (image/audio models, a species catalog, and IndexedDB storage) while allowing authenticated synchronization with a scientific intelligence service (Foundry IQ) when network connectivity is present.

## Offline Mode (Primary)

In its primary mode WildLens operates fully on-device:
- The TensorFlow.js MobileNet model is loaded from the app bundle or service worker cache and executed in-browser for photo classification.
- Species metadata, previously synced scientific sources, and user journal entries are stored in IndexedDB (managed via Dexie.js) so lookups and writes are local and fast.
- GPS and zone detection use the Web Geolocation API and a compact offline mapping of Campeche zones. No external tile servers are required for metadata tagging.
- Audio capture and analysis use the Web Audio API (MediaRecorder + AnalyserNode). Frequency-domain heuristics run in the browser to provide audio-based species suggestions.

## Online Mode (Foundry IQ)

When connectivity is available, WildLens can optionally synchronize with Foundry IQ to enrich the local dataset:
- API endpoint and authentication: credentials are supplied through environment variables (`VITE_FOUNDRY_IQ_ENDPOINT`, `VITE_FOUNDRY_IQ_KEY`) and used over HTTPS.
- Data sync flow: the app requests delta updates, downloads new or updated species metadata, and merges authoritative records into the local IndexedDB species catalog. Sync operations are transactional and idempotent.
- Ecological alerts: the Foundry IQ service can provide region-scoped alerts (e.g., species at risk, habitat disturbance) that are surfaced in the Settings screen and stored for quick reference.
- DEMO_MODE fallback: if environment variables or network access are not available, the service layer returns realistic mock responses so the app behaves predictably without secrets.

## Data Flow Diagrams (text descriptions)

1) Photo identification flow
- User taps camera → image captured → TF.js MobileNet runs inference → the app builds candidate species list with confidence scores → candidate results are displayed and stored in the journal entry if confirmed.

2) Audio identification flow
- The user records a short audio sample → MediaRecorder captures audio while an AnalyserNode supplies frequency-domain data → a lightweight heuristic classifier scores likely species → suggestions appear alongside the recorded sample in the journal.

3) Foundry IQ sync flow
- On user-initiated sync (or scheduled when online): the client sends a sync request → Foundry IQ responds with updated records and sources → client merges updates into IndexedDB and records the sources/timestamp → UI shows sync status and new ecological alerts.

4) Journal save flow
- The user creates or edits a journal entry (photo/audio/note/location) → the entry is written to IndexedDB immediately → the UI acknowledges success. When online, entries can be flagged for optional remote sync in later releases.

## Component Architecture

Main components and responsibilities:
- `App` (PWA shell): routing, service worker registration, and global providers.
- `Listen` page & `useAudioRecorder` hook: capture audio, maintain visualization data, and hand audio buffers to the classifier.
- `useAudioClassifier` hook: lightweight on-device audio heuristics that operate on frequency arrays.
- `Camera` / `EcoScan` & TF.js integration: capture images, run MobileNet inference, and surface results.
- `FieldCard` component: species detail, images, IUCN status, and SoundCard controls.
- `SoundCard` & `useSoundPlayer`: play reference tones or samples for species verification.
- `Journal` pages & `db` layer: Dexie-backed read/write for sightings and user notes.
- `LocationContext` & `useLocation`: geolocation and zone detection logic.
- `FoundryIQ` service: API wrapper for sync, enrichment, and alerts (with `DEMO_MODE`).
- PWA service worker: cache static assets, model files, and ensure offline availability.

## Security

- No sensitive user credentials or PII are stored locally by default; user-provided notes are stored in IndexedDB under the local app scope.
- API keys are supplied only via environment variables at build/deploy time and never hard-coded into the app bundle.
- All communication with Foundry IQ uses HTTPS, and synchronization is opt-in.

## Notes & Next Steps

- Harden delta sync to support conflict resolution for multi-device users.
- Add encrypted backup/export for journal entries if users request cross-device portability.
- Train or fine-tune an audio ML model on labeled Campeche recordings to improve BioListen accuracy.
