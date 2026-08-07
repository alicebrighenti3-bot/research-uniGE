# AI/Radiomics Literature and Existing Comparable Reviews — Salivary Gland Multiparametric Ultrasound

**Compiled:** 2026-08-07
**Method note (read before using this file):** All primary-source domains (pubmed.ncbi.nlm.nih.gov, pmc.ncbi.nlm.nih.gov, ncbi.nlm.nih.gov, europepmc.org, doi.org, crossref.org, sciencedirect.com, onlinelibrary.wiley.com, thieme-connect.com/.de, frontiersin.org, amegroups.org, mdpi.com, academic.oup.com, google.com) were **unreachable via WebFetch** in this environment — every attempt returned `EGRESS_BLOCKED` or a proxy-level 403 (organizational egress policy denial, confirmed via `/__agentproxy/status`). This is a network policy restriction, not a transient failure, and could not be routed around. Consequently **no reference below could be confirmed by directly opening the primary source.** All entries are built from WebSearch result snippets/AI summaries only. Per instructions, each reference is tagged:
- **VERIFIED (multi-source agreement)** = the same title/authors/journal/year/DOI combination appeared consistently across ≥2 independent WebSearch result sets.
- **UNVERIFIED-SINGLE-SOURCE** = only one search surfaced the detail (often exact page numbers, or a summarized abstract); treat these facts as provisional and re-verify by hand (e.g. actual PubMed/journal site access) before citing in the manuscript.
- The WebSearch budget for this session was exhausted (200/200 calls) before some planned confirmatory/journal-specific queries (Cantisani group follow-up, WFUMB/Dietrich guidance, AJNR, Clinical Radiology, Cancers/Diagnostics microvascular-imaging queries) could be run — these are listed as open gaps, not as "nothing found."

---

## SECTION 1 — AI / Radiomics Literature on Salivary Gland Ultrasound

### 1A. Established, published, peer-reviewed AI/radiomics studies (US-based)

1. **Ultrasound-Based Deep Learning Radiomics Models for Predicting Primary and Secondary Salivary Gland Malignancies: A Multicenter Retrospective Study.** PMC12024528 (PMC ID recovered; journal name/year not confirmed from snippet — likely 2024–2025). n=140 (68 primary, 72 secondary malignancies). Compared traditional US-feature models, radiomics, and deep learning, alone and combined, for primary vs. secondary malignancy discrimination. **Notable: multicenter design** — one of the few multicenter AI-US salivary gland studies identified. **UNVERIFIED-SINGLE-SOURCE** (journal/volume/DOI/PMID not resolved; only PMC ID and abstract-level content found; needs direct PubMed confirmation).

2. **"Diagnosis of Salivary Gland Tumors Using Ultrasound Radiomics."** ScienceDirect, pii S0301562925000213 (article-number prefix consistent with *Ultrasound in Medicine & Biology*, unconfirmed). Random Forest classifier; test-set AUC 0.85, accuracy 90%, sensitivity 78%, specificity 92%. **UNVERIFIED-SINGLE-SOURCE** (authors, exact journal, year, DOI, PMID not resolved).

3. **Diagnosis of Salivary Gland Tumors Using Transfer Learning with Fine-Tuning and Gradual Unfreezing.** *Diagnostics* 2023;13(21):3333. DOI: 10.3390/diagnostics13213333. PMID: 37958229. Training/validation 446 benign + 223 malignant images; test set 119 benign + 44 malignant. Pretrained ResNet50V2 with fine-tuning/gradual unfreezing: 5-fold validation accuracy 0.920; test accuracy 89.0%, sensitivity 81.8%, specificity 91.6%. **VERIFIED (multi-source agreement)** — DOI, PMID, and results appeared consistently across independent search hits.

4. **"A deep learning model for the differential diagnosis of benign and malignant salivary gland tumors based on ultrasound imaging and clinical data."** Zhang et al. *Quantitative Imaging in Medicine and Surgery* (QIMS). Combined ML+DL approach; training/validation 500 images (250/250), test set 62 images; test accuracy 93.5%, sensitivity 100%, specificity 87%. **UNVERIFIED-SINGLE-SOURCE** (year, volume/pages, DOI, PMID not resolved).

5. **"Neural network combining with clinical ultrasonography: A new approach for classification of salivary gland tumors."** Tu et al. *Head & Neck* 2023. DOI: 10.1002/hed.27396. **VERIFIED (multi-source agreement)** for title/authors/journal/year/DOI (appeared in two independent searches); quantitative results not extracted.

6. **"The Diagnostic Value of Ultrasound-Based Deep Learning in Differentiating Parotid Gland Tumors."** PMC9119749 (≈2022 based on PMC numbering). **UNVERIFIED-SINGLE-SOURCE** (journal, DOI, PMID, exact results not resolved).

7. **"Deep learning-assisted diagnosis of benign and malignant parotid gland tumors based on automatic segmentation of ultrasound images: a multicenter retrospective study."** PMC11341398 (≈2024). Automatic segmentation via **DeepLabv3** feeding downstream classification (ResNet18, Inception_v3 and others tested); ResNet18 AUC 0.808–0.812 across test sets. **Notable: multicenter, and combines segmentation + diagnosis pipeline** — directly relevant to Task 1 point 3+2 combined. **UNVERIFIED-SINGLE-SOURCE** (journal/DOI/PMID not resolved).

8. **"The Role of Radiomics in Salivary Gland Imaging: A Systematic Review and Radiomics Quality Assessment."** PMC9777175 (≈2022). A **prior systematic review**, not a primary study — surveys radiomics research across salivary gland imaging modalities (CT/MRI/US) and applies the Radiomics Quality Score (RQS) to graded methodological rigor of included studies. **Directly relevant precedent**: shows the radiomics-quality question has already been reviewed once (as of ~2022) but not specifically restricted to, or updated for, ultrasound-only/2023–2026 literature — a defensible gap for an updated US-specific radiomics subsection. **UNVERIFIED-SINGLE-SOURCE** (exact journal/DOI/PMID/year not resolved from snippets).

### 1B. Adjacent (non-ultrasound) radiomics — cited for contrast only, not as US evidence

- **MRI-based radiomics for predicting histology in malignant salivary gland tumors: methodology and "proof of principle."** *Scientific Reports* 2024. DOI (nature.com URL confirms Nature-family journal). **VERIFIED (multi-source agreement)** for title/journal/venue; this is MRI, not US — cite only as a methodological comparator when discussing US radiomics maturity relative to MRI radiomics.
- **Multimodal magnetic resonance imaging for the diagnosis of parotid gland malignancies: systematic review and meta-analysis.** Li et al., *Translational Cancer Research*. **UNVERIFIED-SINGLE-SOURCE.** MRI-only meta-analysis; relevant as the closest analogue to an AI/quantitative systematic review that could theoretically be replicated for US, and as a comparator when discussing whether US-MRI fusion has been studied (see 1D below).

### 1C. Systematic review specifically of AI on salivary gland US (already exists — important for AI-section framing)

- **"Classification of Salivary Gland Tumors on Ultrasound Using Artificial Intelligence: A Systematic Review and Meta-Analysis."** *OTO/Otolaryngology–Head and Neck Surgery* (AAO-HNSF journals, Wiley). DOI: 10.1002/ohn.70102. Published 2025. **VERIFIED (multi-source agreement)** — appeared identically across 3 independent searches. **This is a pre-existing formal systematic review + meta-analysis of AI classification performance on salivary gland US.** Implication for our review: our AI/radiomics subsection should be framed as a *narrative update integrated into the broader mpUS context*, not a competing systematic review/meta-analysis — and this paper should be cited explicitly, with our contribution being synthesis alongside non-AI multiparametric techniques rather than de novo quantitative pooling.

### 1D. Explicit gap assessment against Task 1's six sub-questions

1. **US radiomics of salivary gland lesions** — established but small literature (5–6 usable ultrasound-radiomics/DL papers found, 2022–2025, mostly single-center, Asian cohorts, retrospective). Real, but still early-stage.
2. **DL/ML classification models (benign vs malignant)** — the most mature sub-area; several CNN/transfer-learning studies with reported accuracy 85–95% range, single-center, retrospective, image-level (not always patient-level) validation.
3. **Automatic segmentation of salivary glands on US** — real but sparse; only one identified study combining automatic segmentation (DeepLabv3) with downstream diagnosis (PMC11341398). No stand-alone segmentation-only US validation study (e.g., Dice-score benchmarking across multiple architectures) was identified in this search pass — **flag as a probable genuine gap**, pending confirmation with further targeted search.
4. **Multimodal/multiparametric US *data fusion* AI models (B-mode+Doppler+elastography+CEUS combined into one algorithmic model)** — **no such AI/radiomics fusion study for salivary glands was found.** What exists instead is *qualitative clinician-level* multiparametric integration (e.g., Wakonig 2026, Martino 2020 — see Section 2) — i.e., radiologists combining B-mode+SWE+CEUS interpretively, not a machine-learning model fusing quantitative features from multiple US modes. **This is a genuine, explicit gap** and should be stated as such (currently proposed/aspirational, not yet formally studied as an algorithmic fusion model) rather than claimed as existing.
5. **US–MRI/CT fusion imaging for salivary gland lesions** — no true image-fusion (co-registration/real-time fusion navigation) study specific to salivary gland lesions was identified. Found instead: separate-modality comparative/meta-analytic work (MRI radiomics, MRI multimodal meta-analysis) but not US-MRI fusion per se. **Flag as an apparent gap**, with the caveat that further targeted searching (budget-limited here) may surface interventional/fusion-biopsy literature (fusion-guided biopsy is well established for prostate/liver; a dedicated salivary-gland analogue was not found).
6. **External validation / multicenter AI studies** — two multicenter retrospective studies were identified (PMC12024528: primary vs secondary malignancy classification; PMC11341398: automatic segmentation + diagnosis). Both appear to be **multicenter training/pooled-retrospective designs**, not independent prospective external validation in a fully separate cohort/health system with a locked model — this distinction could not be confirmed from search snippets alone and should be checked directly in the papers before use. **No AI study with clearly described prospective external validation was identified.**

---

## SECTION 2 — Existing Reviews with Similar Scope (Task 2, critical for originality assessment)

### 2A. Closest predecessor — same core concept, different scope/era

**Martino M, Fodor D, Fresilli D, Guiban O, Rubini A, Cassoni A, Ralli M, De Vincentiis C, Arduini F, Celletti I, Pacini P, Polti G, Polito E, Greco A, Valentini V, Sorrenti S, D'Andrea V, Masciocchi C, Barile A, Cantisani V.**
"Narrative review of multiparametric ultrasound in parotid gland evaluation."
*Gland Surgery* 2020 Dec;9(6):2295–2311. DOI: 10.21037/gs-20-530. PMID: 33447581.
**VERIFIED (multi-source agreement)** — full author list, journal, year, volume/pages, DOI, and PMID were consistent across independent searches (AI-generated citation summary plus a separate PubMed listing with matching PMID).
**Scope/differentiation vs. our planned review:** This is genuinely the most conceptually similar prior publication — same "multiparametric ultrasound" framing (B-mode, color Doppler, CEUS, elastography implied by title). Key differences that support originality of a new review: (1) **parotid gland only** — does not cover submandibular, sublingual, or minor salivary glands; (2) published **2020**, predating essentially the entire AI/radiomics literature above, most microvascular/superb microvascular imaging (SMI) literature, and the newest CEUS/elastography refinement studies (2021–2026); (3) narrative, not structured with formal anatomy-first architecture; (4) no interventional US (biopsy/sialendoscopy-guided US) section identifiable from title/topic. **Recommend citing explicitly as precedent and positioning the new review as an update/expansion (all major glands, +AI, +6 years of new evidence, +interventional US).**

### 2B. Most important 2025–2026 competitor — needs direct verification before finalizing differentiation claim

**Johnson F, Bozzato A, Mansour N, Mantsopoulos K, Psychogios G, Zengel P.**
"Sonography of Salivary Gland Tumors and Disorders."
*Ultraschall in der Medizin* (European Journal of Ultrasound) 2025;46(4):318–344. DOI: 10.1055/a-2481-7248. Published online 17 Jan 2025; a CME ("continuing medical education") review article.
**VERIFIED (multi-source agreement)** for authors/journal/year/volume/pages/DOI (Thieme abstract + Thieme full-text listing + independent search summary agreed). **Scope not independently verifiable** — WebFetch to thieme-connect.com/.de was blocked, so the actual technique coverage (whether it formally includes elastography, CEUS, and microvascular Doppler as distinct "multiparametric" sections, vs. primarily B-mode/conventional Doppler technique and pattern recognition) could not be confirmed and is **UNVERIFIED-SINGLE-SOURCE** at the scope level. Title covers "Tumors and Disorders" (i.e., both neoplastic and non-neoplastic/inflammatory-obstructive disease), by an author group (Bozzato, Mantsopoulos, Psychogios) well known for salivary gland US research.
**Action required before submission:** this is the single most important paper to obtain and read in full (via institutional/Thieme access outside this session) — if it already integrates elastography+CEUS+Doppler+normal anatomy+pathology+CME-level teaching in one 2025 article in exactly the target journal category (European ultrasound CME review), it materially narrows the originality case for a new narrative review and the differentiation argument must be built carefully (e.g., emphasis on AI/radiomics integration, more systematic multiparametric technique-by-technique structure, or a different target journal).

### 2C. Other 2025–2026 papers with overlapping but narrower scope

- **Cheng P-C, Hsu Y-F, Hung W-C, Lo W-C, Chang C-M, Wen M-H, Chen AW-G, Liao L-J.** "Multiparametric ultrasonography, elastography, and the Milan System for reporting salivary gland cytopathology in the preoperative evaluation of major salivary gland tumors." *Frontiers in Oncology* 2026;16:1906997. DOI: 10.3389/fonc.2026.1906997. **VERIFIED (multi-source agreement)** for authors/journal/DOI. Scope is **narrower**: tumors only (no normal-anatomy or inflammatory-disease coverage apparent), and organized around correlation with the Milan cytopathology reporting system rather than a full multiparametric-technique structure. Complementary, not directly competing.

- **Wakonig M et al. (first author possibly listed as "Margherita" in one indexing variant — name inconsistency between two search snippets, needs resolution).** "Multiparametric Ultrasound for Preoperative Assessment of Parotid Tumors: A Novel Diagnostic Pathway." *Head & Neck* 2026;48:392–406 (page range **UNVERIFIED-SINGLE-SOURCE**). DOI: 10.1002/hed.70036. **This is original research, not a review** — n=89 patients / 91 parotid tumors, combining B-mode + shear-wave elastography (SWE) + CEUS qualitatively, two blinded readers with consensus. Relevant as recent primary evidence to cite within our review, and as proof that formal quantitative fusion (Task 1 point 4) is not yet standard even in the newest primary studies — they remain qualitative multi-technique integration, not algorithmic fusion.

- **Salivary Gland Committee, AAO-HNS (Hoffman et al., presumably).** "Proposal for standardized ultrasound analysis of the salivary glands: Part 1 submandibular gland." *Laryngoscope Investigative Otolaryngology* 2024. PMID: 38362174. **VERIFIED (multi-source agreement).** A standardization/technique protocol paper, submandibular gland only, explicitly labeled "Part 1" (implying further parts — a parotid-gland Part 2 was not confirmed as published within the search budget available; worth checking directly). Not a comprehensive pathology review; relevant mainly for methodology/technique-standardization citations.

### 2D. Older or narrower reviews (context, not direct competitors)

- **"Ultrasound in Inflammatory and Obstructive Salivary Gland Diseases: Own Experiences and a Review of the Literature."** *Journal of Clinical Medicine* 2021;10(16):3547. PMC8397054. **VERIFIED (multi-source agreement).** Scope limited to inflammatory/obstructive disease (not tumors), predates most recent elastography/CEUS/AI literature.
- **"Diagnostic performance of elastosonography in the differential diagnosis of benign and malignant salivary gland tumors: A meta-analysis."** PMC9533713 (≈2022). Elastography-only meta-analysis, not a full mpUS narrative review.
- **"Does ultrasound elastography have a role as a diagnostic method for Sjögren's syndrome in the salivary glands? A systematic review."** *Oral Radiology* 2024. Elastography + Sjögren's syndrome only — narrow single-technique, single-indication scope.
- **"Accuracy of ultrasound in the diagnosis of salivary gland tumors: an integrative review."** *Research, Society and Development* (Brazilian journal; indexing/impact tier not verified — treat cautiously). Narrow diagnostic-accuracy focus, not multiparametric-technique structured.
- **"US of the Major Salivary Glands: Anatomy and Spatial Relationships, Pathologic Conditions, and Pitfalls."** *RadioGraphics*, volume/DOI pattern (rg.263055024) consistent with an older (~2006) publication — a classic anatomy+pathology B-mode review predating elastography/CEUS/AI entirely. Useful as historical precedent showing the "anatomy + full pathology spectrum" structure has been done once before, but without any multiparametric or AI content — reinforces rather than undermines originality.
- **"Salivary Gland Diseases Ultrasound: How to Carry out a Thorough Examination."** Springer book chapter, ISBN 978-3-031-55799-6 (2024). Book chapter, not an indexed journal review — worth noting as existing but not a direct journal-indexed competitor.
- **"Current Salivary Glands Biopsy Techniques: A Comprehensive Review."** PMC9408798 (≈2022). Interventional/biopsy-focused review — complements an interventional-US section but does not overlap with full multiparametric imaging scope.

### 2E. Journals explicitly checked per instructions — status

| Journal | Result |
|---|---|
| Ultraschall in der Medizin | **Found a major 2025 candidate** (Johnson et al., Section 2B) — highest-priority item to fully verify. |
| Ultrasound in Medicine & Biology | Possible radiomics paper (Section 1A.2) same ISSN-prefix family; no comprehensive review identified. |
| European Radiology | Only older (2002) "Sonography of the salivary glands" review surfaced, plus a 2025 viscoelastic-imaging primary-research paper; no recent comprehensive mpUS review found. |
| Insights into Imaging | No comprehensive salivary gland mpUS review surfaced in available searches. |
| Journal of Ultrasound in Medicine | No comprehensive review surfaced; search budget exhausted before a dedicated confirmatory query could be run — **treat as unresolved, not negative.** |
| Diagnostics (MDPI) | Original-research AI/mpUS papers found (Sections 1A.3, 2C-adjacent Diagnostics 13010012 quantitative mpUS study), no comprehensive narrative review identified. |
| Cancers (MDPI) | Not reached — search budget exhausted before a dedicated query; **unresolved.** |
| Frontiers in Oncology/Medicine | Found the Cheng et al. 2026 paper (Section 2C); no broader comprehensive review found in Frontiers in Medicine specifically. |
| American Journal of Neuroradiology | Not reached — search budget exhausted; **unresolved.** |
| Clinical Radiology | Not reached — search budget exhausted; **unresolved.** |

---

## SECTION 3 — Explicit Gaps (for both tasks)

1. **AI-data fusion of multiple US modalities (B-mode+Doppler+elastography+CEUS) into a single algorithmic/radiomics model** — not found; only qualitative clinician-level multiparametric integration exists (Wakonig 2026, Martino 2020). Genuine, citable gap.
2. **True US–MRI/CT image fusion for salivary gland lesions** (co-registration/navigation, as used in prostate/liver) — not found; only separate-modality comparative studies exist. Likely genuine gap, moderate confidence given budget constraints.
3. **Stand-alone automatic segmentation validation studies** (multi-architecture benchmarking, Dice-score comparison) for salivary gland US specifically — only one combined segmentation+diagnosis paper found; dedicated segmentation-only validation literature not identified.
4. **Prospective, independent external validation of any salivary gland US-AI model** — not identified; existing "multicenter" studies appear to be multicenter retrospective/pooled designs, not locked-model prospective external validation. Needs direct confirmation from full texts.
5. **A 2025 Ultraschall in der Medizin CME review (Johnson et al.) is the single greatest threat to originality** and must be obtained and read in full before finalizing the review's differentiation strategy — this could not be done in this session due to egress blocking.
6. Several target journals (Journal of Ultrasound in Medicine, Cancers, AJNR, Clinical Radiology) were not exhaustively searched due to WebSearch budget exhaustion (200/200 calls reached mid-task) — these should be re-queried in a follow-up pass before the review is finalized.

## SECTION 4 — Verification Limits (summary)

- No primary source (PubMed, PMC, publisher site, DOI resolver) was directly accessible in this session; every WebFetch attempt returned `EGRESS_BLOCKED`, confirmed as an organizational policy denial via the proxy status endpoint (not a transient network fault).
- All bibliographic data above comes from WebSearch result titles/snippets and search-engine-generated summaries, which are known to occasionally mis-transcribe page numbers, misattribute first authors, or merge details from adjacent papers. **Every reference lacking full DOI+PMID confirmation above should be independently re-verified by hand (direct PubMed/journal search) before being cited in the manuscript**, particularly all entries marked UNVERIFIED-SINGLE-SOURCE.
- The WebSearch tool itself enforces a hard session cap (200 calls) that was reached before all planned Task 2 journal-specific queries could run; this cap applied to the whole session, not solely to this research task.
