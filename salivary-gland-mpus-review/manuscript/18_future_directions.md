## 18. Future directions

This section is deliberately organized to separate what has already been studied, even
if only preliminarily, from what remains genuinely speculative — a distinction this
review's sources make possible to draw with reasonable confidence.

**Already studied, early-stage.** Ultrasound-based radiomics and deep-learning
classification of salivary gland tumors (benign versus malignant) is a real, active
research area with a modest but growing literature (roughly half a dozen usable
studies, 2022–2025), predominantly single-center, retrospective, and image-level rather
than consistently patient-level validated, reporting accuracy commonly in the 85–95%
range — already the subject of at least one dedicated systematic review and
meta-analysis of AI classification performance (Chau et al., *Otolaryngol Head Neck
Surg* 2026). Automatic segmentation of salivary gland tumors on ultrasound has been
studied, but almost exclusively as a component of a combined segmentation-plus-
diagnosis pipeline in a small number of studies rather than as an independently
validated, multi-architecture-benchmarked task in its own right — a narrower evidence
base than segmentation research in more heavily studied organs. A limited number of
these studies are explicitly multicenter in design, though as retrospective, pooled-
training studies rather than prospective, externally locked-model validation; **no
study identified in this review reports prospective, independent external validation of
a salivary gland ultrasound AI model**, which should be regarded as a prerequisite
before any such model is considered ready for clinical deployment.

**Proposed but not yet formally studied.** Algorithmic, multiparametric data-fusion
models — machine-learning approaches that combine quantitative features from B-mode,
Doppler, elastography, and CEUS into a single fused classifier, as opposed to a
clinician qualitatively synthesizing the same information — were **not identified as
having been formally studied for the salivary glands** in this review's literature
search, despite being a natural extension of the single-modality AI work above and of
the clinician-level multiparametric integration described in Section 8. Likewise, true
image-fusion navigation between ultrasound and MRI or CT (co-registration for real-time
fusion-guided imaging or biopsy, as is established practice in prostate and liver
intervention) was **not identified as having been studied for salivary gland lesions**,
despite the technology existing and being validated in other organs. Both should be
described as plausible, technically feasible extensions of existing work, not as
findings supported by any current salivary-gland-specific evidence.

**Prediction of histology and molecular features.** Beyond binary benign-versus-
malignant classification, prediction of specific histologic subtype or of molecular/
genomic features (e.g., translocation status in mucoepidermoid or adenoid cystic
carcinoma) from ultrasound-derived data was not identified as having been studied for
this organ; MRI-based radiomics work addressing histology prediction in malignant
salivary tumors exists as a methodological precedent and proof-of-principle in the
adjacent MRI literature, but has not, on the evidence reviewed here, been replicated
using ultrasound-derived features.

**Treatment response assessment and theranostics.** Elastography and CEUS have
documented, if still limited, evidence for characterizing post-radiotherapy fibrosis
(Section 6.4), a plausible foundation for treatment-response monitoring, but
longitudinal, treatment-response-specific study designs (as opposed to cross-sectional
irradiated-versus-control comparisons) were not identified. Image-guided minimally
invasive treatment of salivary gland tumors is real but early-stage for RFA and
essentially unstudied for most other ablative modalities (Section 14.8); framing this
area as an established "theranostic" pathway would overstate the current evidence, and
this review declines to do so.

**Overall assessment.** The trajectory of this field — more granular vascular imaging,
increasingly quantitative elastography and CEUS, and now early AI-assisted
classification — is coherent and plausible, and mirrors trajectories seen in other
organ systems (thyroid, breast, liver) where multiparametric and AI-assisted ultrasound
have matured further. However, the salivary gland literature specifically remains, on
the evidence gathered for this review, several steps behind those more mature fields:
single-technique studies predominate over validated multiparametric or AI-fusion
models, and prospective multicenter external validation — the step that would move any
of these techniques from "promising" to "clinically ready" — is largely absent. Future
work that specifically addresses this validation gap, rather than adding further
single-center descriptive studies, would do the most to advance clinical practice in
this field.
