# Evidence map and critical gap analysis
## Multiparametric ultrasound of the salivary glands: normal anatomy and pathology

Compiled 2026-08-07 from the 8 domain literature notes in `literature/`. This document
is FASE 1 (evidence map) + FASE 2 (gap analysis) of the review project.

---

## 0. Mandatory methodological caveat (applies to every statement below)

Direct verification of primary sources (PubMed, PMC, Crossref, journal sites, Google
Scholar) was **blocked by this environment's network egress policy** for the entire
research phase — confirmed as an explicit organizational policy denial (403 on CONNECT),
not a transient fault, and applies identically to the main session and to every research
subagent. No abstract or full text was directly opened. Every reference in the eight
literature files, and therefore every reference that will be used in the manuscript, is
built from cross-checked WebSearch result snippets only, and is explicitly tagged:

- **VERIFIED (multi-source)** — bibliographic identity (title/authors/journal/year/
  DOI or PMID) recurred consistently across ≥2 independently-worded searches. This
  confirms *bibliographic existence*, not that the reported numbers were independently
  read from the original tables.
- **UNVERIFIED-SINGLE-SOURCE** — appeared in only one search result/AI summary.

**Every numeric value used in the manuscript (sensitivities, specificities, kPa/m-s
values, percentages) must be re-checked by the author against the primary source via
direct PubMed/journal access before submission.** This document and the manuscript that
follows it are a rigorous first-pass, submission-track *draft*, not a submission-ready
final reference list. This limitation is stated explicitly in the manuscript's Methods/
Limitations text and must not be silently dropped later.

---

## 1. Evidence map by domain

Legend: 🟢 consolidated/robust · 🟡 promising, not yet validated · 🔴 experimental/emerging
· ⚪ insufficient evidence / explicit gap

| Domain | Grade | Basis |
|---|---|---|
| Classic B-mode anatomy & spatial relationships | 🟢 | Bialek 2006 *RadioGraphics*; Gritzmann 2003 *Eur Radiol* — stable, widely re-cited classic anatomy references |
| Normal gland size/echogenicity ranges | ⚪ | No universal size range exists (explicitly stated by Hoffman 2024 AAO-HNS standardization proposal); age documented as a confound on echogenicity (Choi 2021, n=969) but no cross-vendor normative dataset |
| US-specific duct calibre norms (Stensen/Wharton) | ⚪ | Only sialographic/cadaveric norms found; ducts are normally *not visualized* on US — non-visualization, not a measured diameter, is the normal finding |
| Technique standardization (frequency, compression, positioning, harmonic imaging) | ⚪ | No dedicated ESHNR position statement found; AAO-HNS standardization series only partial (submandibular gland only, Part 1 of a presumably incomplete series) |
| Conventional B-mode signs of malignancy | 🟡 | Directionally consistent (irregular margin/heterogeneity raise suspicion) but literature explicitly documents **substantial overlap** — margins well-defined in a majority of malignant tumors in ≥1 series; low sensitivity even where specificity is high (Rzepakowska 2017: sens 60%/spec 95.2%) |
| Color/Power Doppler spectral parameters (RI/PI/PSV) for benign vs malignant | 🔴 | Bradley 2000 is the load-bearing "classic" cutoff paper (n=56, single-center); **no completed systematic review/meta-analysis exists** (only an unfulfilled 2021 PROSPERO-style protocol); discordant, largely unattributable cutoff values circulate in secondary sources |
| Superb Microvascular Imaging (SMI) for PA vs Warthin | 🟡 | Multiple single/dual-center studies converge directionally (SMI > CDFI for vascular pattern detail) but two of the most-cited studies (2020) may be duplicate/near-duplicate publications of the same dataset — unresolved; no completed systematic review |
| Strain/2D-SWE elastography for benign vs malignant tumors | 🟡 | Two meta-analyses answering the *same* question disagree substantially (Front Oncol 2022: 16 studies, spec 0.64; BMC Oral Health 2025: 26 studies, spec 0.79) — ~15-point gap attributed explicitly by the 2022 meta-analysis to technique/vendor heterogeneity; **biological confound**: pleomorphic adenoma stiffness can exceed malignant-tumor stiffness (Bhatia 2012) — a universal kPa cut-off is not physiologically plausible, not just unmeasured |
| 2D-SWE for Sjögren's syndrome | 🟡→🟢 | Best-supported elastography application: 3 independent systematic reviews/meta-analyses within an 18-month window (Eur Radiol 2023 sens 0.80/spec 0.87; BMJ Open 2024; Oral Radiology 2024) — redundant coverage itself signals the primary evidence base is still considered unsettled, but pooled estimates are reasonably consistent |
| CEUS — PA vs Warthin (quantitative TIC parameters) | 🟢 | Rogalska 2022 meta-analysis (15 studies) gives internally consistent, multi-source-verified pooled TTP/nMTT differences | 
| CEUS — malignancy detection (pooled accuracy) | ⚪ | **No pooled sensitivity/specificity meta-analysis for CEUS malignant-vs-benign differentiation was found** — evidence rests on single-center cohorts only |
| CEUS society guideline coverage of salivary glands | ⚪ | EFSUMB non-hepatic CEUS guideline (Sidhu 2018) plausibly includes salivary glands as a superficial-organ application, but explicit salivary-gland content could not be confirmed from primary text |
| OMERACT salivary gland US (SGUS) score in Sjögren's syndrome | 🟢 (trained) / 🟡 (real-world) | Best-developed, most rigorously validated scoring system in this entire review — multiple OMERACT reliability exercises, atlas-based training improves kappa; but reliability is more modest for untrained readers, and SGUS–ESSDAI correlation is inconsistent across cohorts — this nuance must be represented honestly |
| IgG4-related disease sonography | 🟡 | Real, multi-source-verified pattern description (bilateral hypoechoic areas, Mikulicz/Küttner) but limited to a handful of studies, largely single-center |
| Sarcoidosis / HIV-related salivary disease sonography | ⚪ | Essentially case-report/small-series level; no validated scoring system for either |
| Sialolithiasis diagnostic accuracy | 🟢 | Best-evidenced diagnostic question in the entire review: Kim 2022 meta-analysis (10 studies, DOR 162.6, AUC 0.96); consistent, multi-source-verified |
| Histotype-specific malignant tumor US signatures (MEC, AdCC, ACC, salivary duct carcinoma, ca-ex-PA) | ⚪ | No dedicated primary US-morphology study identified for any of these — genuine, clearly stated gap |
| FNA vs core needle biopsy | 🟢 | Directionally consistent across ≥3 independent studies (Eom 2015; Cho 2020; Kassem 2025/2026 meta-analysis, 15 studies/3669 patients) — CNB outperforms FNA on sensitivity and non-diagnostic rate at comparable complication rates |
| Milan System for Reporting Salivary Gland Cytopathology | 🟢 (framework) / 🟡 (ROM figures) | Framework itself well-established (2nd edition 2023/2024, tri-journal simultaneous publication); institutional risk-of-malignancy figures per category are markedly heterogeneous, especially for AUS/SUMP categories |
| RFA for benign parotid tumors (Warthin, PA) | 🟡 | Most mature ablation modality: 1 prospective safety/feasibility trial + 1 systematic review + 1 cohort study — still limited/benign-only evidence |
| MWA, ethanol sclerotherapy | 🔴 | Small retrospective case series / case reports only |
| Laser ablation, HIFU for salivary gland lesions | ⚪ | **Not represented in the retrievable literature at all** — not even case reports; should be described as unstudied, not "experimental" |
| AI/deep learning classification (benign vs malignant, US images) | 🟡 | Real, growing literature (2022–2025), single-center, retrospective, accuracy commonly 85–95% — already the subject of one systematic review (Chau 2026) |
| AI multiparametric data-fusion models (B-mode+Doppler+SWE+CEUS combined algorithmically) | ⚪ | **Not found.** Only clinician-level qualitative multiparametric integration exists (Wakonig 2023/2026) — this is a real, citable gap, not yet a validated technology |
| US–MRI/CT fusion imaging for salivary gland lesions | ⚪ | Not found as a dedicated study |

---

## 2. Key discordances requiring explicit treatment in the manuscript (not silent resolution)

1. **Elastography tumor meta-analyses** — Front Oncol 2022 (spec 0.64) vs BMC Oral Health
   2025 (spec 0.79) for the same clinical question. Attribute to technique/vendor
   heterogeneity (explicitly stated by the 2022 meta-analysis), not to one being "right."
2. **Grayscale malignancy signs** — "irregular margin/shape" is repeated as a teaching
   heuristic, but at least one primary dataset shows well-defined margins in a majority
   of malignant tumors. State the overlap plainly.
3. **Doppler RI/PI/PSV cut-offs** — multiple discordant values circulate in secondary
   sources without confirmed attribution; only Bradley et al. 2000 (n=56) is a
   confirmed, load-bearing primary source. Do not present a consolidated cut-off table
   for spectral Doppler.
4. **SMI studies in PA/Warthin (2020, two near-identical papers)** — flag explicitly as
   possibly duplicate/near-duplicate publication rather than two independent
   confirmatory studies.
5. **Sialolithiasis accuracy figures (Özçelik 2024)** — internally inconsistent
   sensitivity figures (65% vs 86%) within the same retrieved synthesis; report as
   unresolved pending primary-text check, not averaged.

---

## 3. Originality / overlap assessment (FASE 2 core deliverable)

Two existing publications are close enough in concept to require explicit differentiation:

- **Johnson F, Bozzato A, Mansour N, Mantsopoulos K, Psychogios G, Zengel P. "Sonography
  of Salivary Gland Tumors and Disorders." *Ultraschall in der Medizin* 2025;46(4):
  318–344.** A 2025 CME review in the review's target journal category, by a well-known
  salivary-gland-US author group. This is the single biggest originality threat. Its
  exact technique coverage (whether it formally structures around elastography/CEUS/SMI
  as distinct multiparametric sections, versus being primarily a B-mode/conventional-
  Doppler pattern-recognition CME piece) could **not** be verified in this environment
  (Thieme full text inaccessible) and **must be read in full by the author before
  finalizing this differentiation** — this is flagged as an action item, not resolved.
- **Martino M, Fodor D, Fresilli D, et al. "Narrative review of multiparametric
  ultrasound in parotid gland evaluation." *Gland Surgery* 2020;9(6):2295–2311.**
  Nearly identical conceptual framing ("multiparametric ultrasound"), but: parotid gland
  only; 2020 (predates essentially all SMI, most CEUS-quantification, and all AI/
  radiomics literature used here); narrative rather than structured around explicit
  evidence-grading.
- **Cheng P-C et al., *Frontiers in Oncology* 2026** (mpUS + Milan System correlation)
  is narrower (tumors only, cytopathology-correlation framing) and complementary, not
  competing.

**Differentiation strategy for this review** (to be stated explicitly in the
Introduction):
1. **Broadest anatomic and disease scope in one document** — parotid + submandibular +
   sublingual + minor glands, spanning inflammatory/obstructive, autoimmune/systemic,
   benign, and malignant disease, plus lymph nodes, in a single technique-by-technique
   multiparametric structure (no single 2023–2026 article found that covers all of
   this).
2. **Explicit critical evidence-grading**, not descriptive cataloguing: this review
   systematically distinguishes consolidated vs promising vs experimental evidence,
   and explicitly analyzes *why* meta-analyses of the same question disagree (vendor,
   ROI, technique, population) rather than reporting a single pooled number.
3. **Currency through 2026**, including AI/radiomics, viscoelasticity imaging, and the
   Milan System 2nd edition — literature largely unavailable at Martino 2020's writing.
4. **Integrated interventional-US section** (FNA vs CNB evidence, ablation techniques
   stratified explicitly by evidence maturity) tied to a single proposed diagnostic
   workflow — not present as a structural element in the closest comparators identified.
5. **An explicitly author-proposed (not guideline-level) multiparametric diagnostic
   algorithm**, clearly labeled as such, addressing the review's stated central
   question about integration and validation status.

---

## 4. Central question this review must keep answering

*"How can conventional and advanced multiparametric ultrasound be integrated to improve
diagnosis, characterization, tissue sampling and management of normal and pathological
salivary glands, and which components of this approach are sufficiently validated for
current clinical practice?"*

Per the evidence map above, the honest answer that must run through the whole
manuscript: **B-mode + Doppler is validated for first-line triage and for sialolithiasis;
OMERACT SGUS scoring is validated for Sjögren's syndrome under trained conditions; CNB
is better evidenced than FNA for malignancy detection. Elastography and SMI are
promising but not yet reducible to universal cut-offs. CEUS is promising for PA-vs-
Warthin differentiation but unproven for pooled malignancy detection. AI-based
multiparametric data fusion, US–MRI fusion, and most ablation techniques beyond RFA
remain experimental or unstudied for this organ.**
