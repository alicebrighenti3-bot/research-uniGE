const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  Numbering, LevelFormat, convertInchesToTwip, PageBreak
} = require("docx");
const fs = require("fs");

const FONT = "Times New Roman";

function p(text, opts = {}) {
  const { bold = false, italic = false, size = 24, heading = null, align = AlignmentType.JUSTIFIED, spacingAfter = 200, spacingBefore = 0 } = opts;
  return new Paragraph({
    heading: heading || undefined,
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore, line: 360 },
    children: [ new TextRun({ text, bold, italics: italic, size, font: FONT }) ],
  });
}

function multi(runs, opts = {}) {
  const { align = AlignmentType.JUSTIFIED, spacingAfter = 200, spacingBefore = 0, heading = null } = opts;
  return new Paragraph({
    heading: heading || undefined,
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore, line: 360 },
    children: runs.map(r => new TextRun({ text: r.text, bold: r.bold||false, italics: r.italic||false, superScript: r.sup||false, size: r.size||24, font: FONT })),
  });
}

function h1(text) { return p(text, { heading: HeadingLevel.HEADING_1, bold: true, size: 28, align: AlignmentType.LEFT, spacingBefore: 400, spacingAfter: 200 }); }
function h2(text) { return p(text, { heading: HeadingLevel.HEADING_2, bold: true, size: 26, align: AlignmentType.LEFT, spacingBefore: 300, spacingAfter: 150 }); }
function h3(text) { return p(text, { heading: HeadingLevel.HEADING_3, bold: true, italic: true, size: 24, align: AlignmentType.LEFT, spacingBefore: 200, spacingAfter: 120 }); }

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullet-list", level: 0 },
    spacing: { after: 120, line: 360 },
    children: [ new TextRun({ text, size: 24, font: FONT }) ],
  });
}

function note(text) {
  return p(text, { italic: true, size: 22, spacingAfter: 200 });
}

function cell(text, opts = {}) {
  const { width = 2000, bold = false, shade = null, size = 20 } = opts;
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: shade ? { type: ShadingType.CLEAR, fill: shade } : undefined,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [ new Paragraph({ children: [ new TextRun({ text, bold, size, font: FONT }) ] }) ],
  });
}

function row(cells) { return new TableRow({ children: cells }); }

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullet-list",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: convertInchesToTwip(0.4), hanging: convertInchesToTwip(0.2) } } } },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
        },
      },
      children: [
        // TITLE PAGE
        p("Anticoagulation Failure in High-Risk Thrombotic Antiphospholipid Syndrome: Treatment Effects, Prognostic Determinants, and the Unresolved Role of Cancer", { bold: true, size: 32, align: AlignmentType.CENTER, spacingAfter: 300 }),
        p("Working title — draft manuscript v0.6", { italic: true, align: AlignmentType.CENTER, size: 22, spacingAfter: 100 }),
        p("Running title: Anticoagulation failure in high-risk APS — treatment, prognosis, and cancer", { align: AlignmentType.CENTER, size: 22, spacingAfter: 400 }),
        p("Authors: [to be completed]", { align: AlignmentType.CENTER, size: 22, spacingAfter: 80 }),
        p("Affiliations: [to be completed]", { align: AlignmentType.CENTER, size: 22, spacingAfter: 80 }),
        p("Corresponding author: [to be completed]", { align: AlignmentType.CENTER, size: 22, spacingAfter: 400 }),
        p("Keywords: antiphospholipid syndrome; triple positivity; high-risk antiphospholipid antibody profile; cancer-associated thrombosis; anticoagulation; direct oral anticoagulants; vitamin K antagonists; scoping review", { align: AlignmentType.CENTER, size: 22, spacingAfter: 100 }),
        p("Word count: [to be completed]  |  Tables: [n]  |  Figures: [n]  |  References: [n]", { align: AlignmentType.CENTER, size: 20, italic: true }),

        new Paragraph({ children: [new PageBreak()] }),

        // ABSTRACT
        h1("Abstract"),
        note("[Placeholder — to be finalised once the search and data charting are complete. Structure below follows the format typically required for a scoping review abstract; word limits should be checked against the target journal.]"),
        h3("Background"),
        p("Vitamin K antagonists (VKAs) remain the recommended anticoagulant treatment for patients with high-risk or triple-positive antiphospholipid syndrome (APS), following randomized evidence of excess arterial thrombotic events with direct oral anticoagulants (DOACs) in this subgroup. Independently, current guidance for cancer-associated thrombosis favours DOACs or low-molecular-weight heparin (LMWH) over VKAs. Whether, and how, these two evidence-based recommendations can be reconciled when high-risk APS and active malignancy coexist has not, to our knowledge, been systematically examined."),
        h3("Objectives"),
        p("To map the available evidence on anticoagulant management in patients with high-risk/triple-positive APS and concurrent cancer; to synthesise a clinical framework distinguishing evidence-based, extrapolated, and expert-opinion–based recommendations across common oncological scenarios; and, where the identified literature supports it, to conduct a two-domain quantitative synthesis of high-risk thrombotic APS anticoagulation — therapeutic effect and prognostic determinants — evaluating active cancer as a candidate prognostic factor and, where specifically supported, as a candidate treatment-effect modifier."),
        h3("Methods"),
        p("[To be completed: scoping review conducted per PRISMA-ScR/JBI methodology; databases searched; number of records screened/included.]"),
        h3("Results"),
        p("[To be completed after data charting.]"),
        h3("Conclusions"),
        p("[To be completed.]"),

        new Paragraph({ children: [new PageBreak()] }),

        // 1. INTRODUCTION
        h1("1. Introduction"),

        h2("1.1 Antiphospholipid syndrome: classification and risk stratification"),
        p("Antiphospholipid syndrome (APS) is an acquired, autoimmune thrombophilia defined by the persistent presence of antiphospholipid antibodies (aPL) — lupus anticoagulant (LAC), anticardiolipin antibodies (aCL), and anti-β2-glycoprotein I antibodies (anti-β2GPI) — in patients with vascular thrombosis and/or pregnancy morbidity [REF: 2023 ACR/EULAR APS classification criteria; 9]. Persistence of antibody positivity on two occasions at least 12 weeks apart, together with the number and combination of positive assays, is central to both diagnosis and risk stratification [9]."),
        p("A key concept for the present work is the distinction between the number of positive aPL assays. Patients positive for all three antibody types — LAC, aCL, and anti-β2GPI, so-called “triple positivity” — together with patients otherwise classified as having a “high-risk aPL profile”, carry a substantially higher cumulative incidence of thrombotic recurrence, both venous and arterial, than single- or double-positive patients [1]. Across international recommendations, triple-positive/high-risk APS is treated as a distinct clinical phenotype requiring a different therapeutic approach from lower-risk profiles, rather than as a simple summation of individual antibody risks."),

        h2("1.2 High-risk/triple-positive APS: the case for vitamin K antagonists"),
        p("Three randomized controlled trials have directly compared a DOAC with a VKA in patients with thrombotic APS. The Rivaroxaban in Antiphospholipid Syndrome (TRAPS) trial enrolled patients with triple-positive APS and was terminated prematurely after an excess of arterial thrombotic events, predominantly stroke, occurred in the rivaroxaban arm [1]. A second open-label trial by Ordi-Ros et al. compared rivaroxaban with a VKA in a broader thrombotic APS population and likewise reported a signal toward increased arterial events with rivaroxaban [2]. The Apixaban for the Secondary Prevention of Thromboembolism among patients with APS (ASTRO-APS) trial subsequently found that apixaban did not perform as an equivalent substitute for warfarin [3]."),
        p("A meta-analysis of these randomized trials by Khairani et al. confirmed that, compared with VKAs, DOACs were associated with an increased risk of arterial thrombotic events, with no significant difference in venous thromboembolism (VTE) recurrence or major bleeding; the risk appeared highest among triple-positive patients and with rivaroxaban specifically [4]. A subsequent multicentre retrospective comparative cohort (Emory/McMaster centres, patients with acute thrombosis 2012–2018, n=152: 77 warfarin, 75 DOAC) reported no difference between DOAC and warfarin in recurrent thrombosis (HR 0.91, 95% CI 0.46–1.79) but a lower rate of clinically relevant bleeding with DOACs (HR 0.43, 95% CI 0.20–0.95), in a population the authors describe as predominantly lower-risk, while explicitly cautioning against extending this to triple-positive patients or those with prior arterial thrombosis [24]. As reported, this cohort's recurrent-thrombosis outcome combines venous and arterial events rather than separating them, which — consistent with the outcome hierarchy adopted in Section 2.7 — limits how directly its overall estimate can inform the specifically arterial risk signal seen in the triple-positive RCT population; this will be revisited once the full text is reviewed for a disaggregated estimate. On this basis, the European Medicines Agency and, subsequently, the US Food and Drug Administration issued warnings against the use of DOACs in patients with APS, particularly those with triple positivity or a history of arterial thrombosis [REF: EMA/FDA safety communications]. Contemporary guidance and narrative updates — including the 2019 EULAR recommendations for the management of APS in adults [5], the Chest antithrombotic therapy guideline [13], the British Society for Haematology guideline [REF], and recent reviews of anticoagulant and non-anticoagulant therapy in thrombotic APS [10,11] — converge in recommending VKA therapy (target INR 2.0–3.0, or higher for recurrent or arterial disease per local protocol) as the standard of care for triple-positive or otherwise high-risk thrombotic APS, reserving DOACs for selected lower-risk, venous-only, single/double-positive patients under specific circumstances (e.g., patients already stable on a DOAC, inability or unwillingness to undergo INR monitoring, or VKA contraindication). Reliable INR monitoring is itself a recognised challenge in thrombotic APS, particularly when lupus anticoagulant interferes with certain thromboplastin reagents [12]."),
        p("The mechanistic basis for the differential performance of DOACs and VKAs in high-risk APS is not fully established. Proposed explanations — including differential effects on thrombin generation, complement activation, and antibody-mediated endothelial and monocyte activation compared with the broader, multi-factor anticoagulant effect of VKAs — remain hypothesis-generating rather than proven [REF]. This mechanistic uncertainty is noted here as an explicit limitation of current understanding, not as an established causal explanation."),

        h2("1.3 Cancer-associated thrombosis: the modern paradigm"),
        p("Independently of the APS literature, contemporary guidelines for cancer-associated venous thromboembolism — including the National Comprehensive Cancer Network (NCCN) guidance [14], the 2022 International Initiative on Thrombosis and Cancer (ITAC) clinical practice guidelines and their 2016 predecessor [15,16], the American Society of Clinical Oncology (ASCO) guideline update [17], and the 2022 European Society of Cardiology (ESC) Cardio-Oncology guidelines [18] — recommend either a DOAC (apixaban, rivaroxaban, or edoxaban) or LMWH as first-line therapy, generally for a minimum of three to six months and, in practice, for as long as the malignancy remains active or under treatment. Choice between agents is guided by renal and hepatic function, gastrointestinal or genitourinary tumour site (favouring LMWH because of bleeding risk with DOACs), bleeding risk, thrombocytopenia, and patient preference; a dedicated review of anticoagulation strategy selection in cancer patients provides a broader synthesis of these factors [19]."),
        p("Critically for the present review, the pivotal trials and guideline documents underlying this paradigm were neither designed nor powered to identify, let alone stratify recommendations by, the presence of an antiphospholipid antibody profile. The cancer-associated thrombosis literature and the APS literature have therefore developed as two internally coherent but essentially non-overlapping evidence bases."),

        h2("1.4 Rationale: a clinical and scientific collision"),
        p("When high-risk or triple-positive APS and active malignancy coexist in the same patient, two evidence-based guideline bodies point toward different first-line agents. This is not merely a theoretical tension. Active oncological treatment introduces practical and biological factors that specifically threaten the feasibility of VKA therapy — the drug of choice in high-risk APS — including chemotherapy- or radiotherapy-induced mucositis, nausea and vomiting, variable oral intake and vitamin K consumption, drug–drug interactions with chemotherapeutic and supportive-care agents, thrombocytopenia complicating both therapeutic-intensity anticoagulation and bleeding risk, and recurrent need for temporary interruption around invasive procedures or catheter placement."),
        p("Available literature at this specific intersection is currently limited to isolated case reports and small, largely descriptive case series. A recent case report explicitly frames the coexistence of cancer, APS, and lupus anticoagulant as a “perfect storm” for thrombosis, illustrating the clinical dilemma but without offering a generalisable management strategy [6]. Separately, prospective cohort data in ambulatory cancer patients receiving chemotherapy show a higher prevalence of aPL positivity and a higher rate of thrombotic events among aPL-positive patients compared with aPL-negative controls [7]; a systematic review of observational studies has similarly documented an elevated prevalence of aPL in patients with solid tumours [8]. These data, however, concern aPL positivity — often low-titre and transient — in unselected oncological populations, and do not describe patients meeting classification criteria for APS, still less triple-positive APS. To our knowledge, no cohort study, registry, or comparative study has specifically addressed anticoagulant strategy, efficacy, or safety in patients with defined high-risk/triple-positive APS and concurrent active cancer."),
        p("This distinction — between (A) oncological patients with simple, often transient aPL positivity, (B) oncological patients with clinically defined APS, and (C) oncological patients with high-risk/triple-positive APS — is maintained throughout this review and is central to interpreting the existing literature without over-extrapolating findings from one population to another."),

        h2("1.5 Objectives"),
        p("This review pursues two conceptually distinct questions about anticoagulation in high-risk thrombotic APS, kept deliberately separate rather than collapsed into one (see Section 2.7 for the full rationale): a therapeutic-effect question (Domain A — do different anticoagulant strategies produce different rates of recurrence and bleeding) and a prognostic question (Domain B — which patient and disease characteristics identify those who fail anticoagulation regardless of strategy). Active malignancy is a candidate factor in both domains, but qualifies for each on different evidence: as a Domain B candidate prognostic factor it needs only studies that report cancer status; as a Domain A treatment-effect modifier it needs a formal treatment × cancer-status interaction test, which is a materially higher bar."),
        bullet("Primary aim: to systematically map, using scoping review methodology, the existing evidence on anticoagulant management of patients with high-risk/triple-positive APS and active or recent malignancy, explicitly distinguishing populations A, B, and C defined in Section 1.4."),
        bullet("Secondary aim: to synthesise, from this evidence map together with directly relevant APS and cancer-associated thrombosis literature, a clinical decision framework spanning common oncological scenarios (stable disease, chemotherapy, radiotherapy-induced mucositis, thrombocytopenia, invasive procedures, unstable anticoagulation control, breakthrough thrombosis, and major bleeding), with each recommendation explicitly graded by the nature of its evidentiary basis."),
        bullet("Tertiary aim (conditional — see Section 2.7): if the identified literature supports it, to conduct a two-domain quantitative synthesis of high-risk thrombotic APS anticoagulation — a therapeutic-effect meta-analysis (Domain A) and a prognostic-factor meta-analysis (Domain B) — with active cancer evaluated as a pre-specified candidate prognostic factor in Domain B and, only where the data specifically allow it, as a candidate treatment-effect modifier in Domain A. Should the review instead confirm robust general evidence in both domains alongside a near-total absence of evidence for the high-risk-APS-plus-active-cancer intersection specifically, that contrast is treated as a principal finding of the review in its own right, not as a shortfall against this aim."),

        new Paragraph({ children: [new PageBreak()] }),

        // 2. METHODS
        h1("2. Methods"),

        h2("2.1 Protocol and reporting standards"),
        p("This scoping review will be conducted and reported in accordance with the Preferred Reporting Items for Systematic Reviews and Meta-Analyses extension for Scoping Reviews (PRISMA-ScR) [REF: Tricco et al., 2018] and the Joanna Briggs Institute (JBI) methodological guidance for scoping reviews [REF: Peters et al., JBI Manual]. The protocol will be registered prospectively on the Open Science Framework (OSF), as scoping review protocols are not eligible for registration on PROSPERO. [Registration details to be completed.]"),

        h2("2.2 Eligibility criteria (Population–Concept–Context)"),
        p("Eligibility is defined using the Population–Concept–Context (PCC) framework recommended for scoping reviews, rather than a strict PICO structure, reflecting the descriptive/mapping aim of the primary review component."),
        multi([{text:"Population: "},{text:"adults (≥18 years) with a diagnosis of APS fulfilling recognised classification criteria (Sapporo 1999, revised Sydney 2006, or 2023 ACR/EULAR), or with persistently positive aPL explicitly reported as single-, double-, or triple-positive, who have a current or past diagnosis of a solid or haematological malignancy.", bold:false}]),
        multi([{text:"Concept: "},{text:"anticoagulant management strategies — vitamin K antagonists, direct oral anticoagulants, low-molecular-weight heparin, unfractionated heparin, and switching/bridging approaches — and any reported thrombotic, haemorrhagic, or treatment-continuity outcome in this population."}]),
        multi([{text:"Context: "},{text:"any clinical setting and country, published in any language with an available English abstract at minimum, with no restriction on publication date. Randomized controlled trials, prospective and retrospective cohort studies, registries, case series, and case reports are all eligible for inclusion and will be charted according to study design, consistent with the exploratory aim of a scoping review."}]),
        p("Exclusion criteria: studies reporting isolated, non-persistent aPL positivity without confirmatory retesting; studies limited to obstetric APS without a thrombotic component; studies on cancer populations that do not report aPL/APS status; conference abstracts without extractable data; paediatric populations; and reviews, editorials, or commentaries without original data (retained separately for discussion and citation-tracking purposes only)."),

        h2("2.3 Information sources and search strategy"),
        p("The following databases will be searched from inception: MEDLINE (via PubMed), Embase, Cochrane Central Register of Controlled Trials (CENTRAL), and Scopus/Web of Science. Reference lists of all included studies and of relevant narrative and systematic reviews will be hand-searched, and forward citation tracking will be performed for key articles. Grey literature (conference abstracts from ASH, ISTH, EULAR, ACR annual meetings) will be searched separately and reported but not pooled with the main evidence map."),
        h3("Sensitive (broad) PubMed search string"),
        p("(\"antiphospholipid syndrome\"[MeSH] OR \"antiphospholipid antibodies\"[MeSH] OR \"lupus coagulation inhibitor\"[MeSH] OR antiphospholipid[tiab] OR \"lupus anticoagulant\"[tiab]) AND (\"neoplasms\"[MeSH] OR cancer[tiab] OR malignan*[tiab] OR oncolog*[tiab] OR tumor[tiab] OR tumour[tiab]) AND (\"anticoagulants\"[MeSH] OR anticoagul*[tiab] OR warfarin[tiab] OR \"vitamin K antagonist*\"[tiab] OR \"direct oral anticoagulant*\"[tiab] OR DOAC[tiab] OR NOAC[tiab] OR rivaroxaban[tiab] OR apixaban[tiab] OR edoxaban[tiab] OR dabigatran[tiab] OR heparin[tiab] OR \"low molecular weight heparin\"[tiab] OR LMWH[tiab])", { italic: true, size: 22 }),
        h3("Specific (high-risk/triple-positive) PubMed search string"),
        p("(\"antiphospholipid syndrome\"[MeSH] OR antiphospholipid[tiab]) AND (\"triple positiv*\"[tiab] OR \"high-risk\"[tiab] OR (\"lupus anticoagulant\"[tiab] AND \"anticardiolipin\"[tiab] AND \"beta2 glycoprotein\"[tiab])) AND (cancer[tiab] OR malignan*[tiab] OR oncolog*[tiab] OR chemotherapy[tiab] OR radiotherapy[tiab]) AND (anticoagul*[tiab] OR warfarin[tiab] OR DOAC[tiab] OR \"direct oral anticoagulant*\"[tiab])", { italic: true, size: 22 }),
        h3("MeSH terms and free-text terms"),
        p("MeSH: Antiphospholipid Syndrome; Lupus Coagulation Inhibitor; Anticardiolipin Antibodies; beta 2-Glycoprotein I; Neoplasms; Venous Thromboembolism; Anticoagulants; Warfarin; Factor Xa Inhibitors; Heparin, Low-Molecular-Weight.", { italic: true }),
        p("Additional free-text terms: “cancer-associated thrombosis”, “triple positive APS”, “high-risk aPL profile”, “breakthrough thrombosis”, “mucositis anticoagulation”, “time in therapeutic range”/TTR, “bridging therapy”, “switching anticoagulant”.", { italic: true }),

        h2("2.4 Study selection"),
        p("Records identified through database searching will be de-duplicated and screened independently by two reviewers at the title/abstract level, followed by independent full-text assessment against the eligibility criteria above. Disagreements will be resolved by discussion or, where necessary, adjudication by a third reviewer. The study selection process will be reported in full using a PRISMA-ScR flow diagram. [Software for screening — e.g., Rayyan or Covidence — to be confirmed.]"),

        h2("2.5 Data charting process and items"),
        p("A standardised data extraction form will be piloted on a sample of included studies and refined iteratively, consistent with scoping review methodology. The full list of variables to be charted is provided in Appendix B."),

        h2("2.6 Synthesis of results"),
        p("Consistent with the feasibility analysis conducted prior to this protocol (summarised in Section 4.1), no quantitative pooling of effect estimates is planned. The anticipated heterogeneity in APS case definitions, aPL profiles, tumour types, oncological treatments, anticoagulant regimens, and outcome definitions and follow-up duration renders meta-analytic pooling clinically and methodologically inappropriate for the core research question. Findings will instead be synthesised: (i) descriptively and in tabular form for the scoping review component (study characteristics, populations A/B/C, strategies and outcomes reported); and (ii) narratively for the clinical framework component, in which each recommendation is explicitly labelled according to its evidentiary basis, using the following three-tier grading scheme:"),
        bullet("Direct evidence: derived from studies conducted in the combined population of interest (APS, particularly high-risk/triple-positive, with concurrent malignancy)."),
        bullet("Indirect/extrapolated evidence: derived from studies in APS without cancer, or in cancer-associated thrombosis without documented APS, applied by analogy to the combined population."),
        bullet("Expert opinion/pathophysiological reasoning: recommendations not directly supported by either literature but considered clinically reasonable on pharmacological or mechanistic grounds."),
        p("A pre-specified contingency is adopted rather than a purely post-hoc decision: as full-text screening and data charting proceed (tracked in a companion extraction spreadsheet, see Appendix C), a quantitative pooled analysis will be considered only if (i) at least five distinct studies contribute a Population C (high-risk/triple-positive APS with cancer) patient, (ii) at least one of these is a genuine comparative design (cohort, registry, or RCT) rather than a case report or case series, and (iii) at least three Population C patients are identifiable on each of at least two anticoagulant strategies being compared. Criterion (ii) is treated as necessary, not merely sufficient: accumulating case reports/series alone, however numerous, supports at most a descriptive pooled proportion with an explicit publication-bias caveat, never a comparative effect estimate, since case-level reports lack a denominator and a reference group by design. If these criteria are not met, the scoping review and narrative clinical framework described above stand as the complete, self-sufficient output of this project. If they are met, which of the tiers set out in Section 2.7 becomes achievable depends on exactly what combination of cancer status, aPL profile, and treatment the identified comparative studies report — not on patient count alone."),

        h2("2.7 Pre-specified statistical analysis plan for a conditional quantitative synthesis"),
        p("A key methodological distinction structures everything below and is stated explicitly because it is easy to blur in practice: a variable associated with worse outcome regardless of treatment received is a prognostic factor; a variable that changes the size or direction of a treatment's effect is a treatment-effect modifier. The two require different evidence — the first needs only an outcome-regression association within a single cohort, the second needs a formal treatment × factor interaction term — and conflating them (e.g., inferring effect modification from 'significant in one subgroup, not the other') is a recognised source of overinterpretation in the anticoagulation literature this review addresses. Active malignancy is treated throughout as a candidate prognostic factor by default, and is only additionally described as a candidate treatment-effect modifier where a study specifically supports that stronger claim."),
        p("This distinction is built into the review's architecture as two parallel domains, pursued together but analysed and reported separately, never collapsed into one composite question."),

        h3("Domain A — therapeutic effect: does anticoagulant strategy change outcomes in high-risk thrombotic APS?"),
        p("Primary comparison: VKA vs. DOAC → arterial recurrence. Co-primary: VKA vs. DOAC → venous recurrence, analysed as a fully separate outcome and never pooled with arterial events, since both baseline recurrence risk and relative treatment effect are expected to differ by event type in high-risk APS. Safety co-primary: ISTH major bleeding. LMWH-based strategies are kept analytically distinct from the VKA/DOAC comparison and treated as predominantly descriptive/observational, since patients receiving LMWH in the available literature are drawn overwhelmingly from a cancer-associated-thrombosis indication rather than from APS trials proper (see the network meta-analysis note below). Only RCTs and genuine comparative observational studies of anticoagulant strategy contribute to Domain A; case reports and case series do not, for the reasons given in Section 2.6."),

        h3("Domain B — prognostic factors: which patients fail anticoagulation regardless of strategy?"),
        p("A parallel meta-analysis of factors associated with recurrent thrombosis (and, secondarily, major bleeding) during anticoagulation in thrombotic APS, treated explicitly as a prognostic-factor synthesis rather than a therapeutic one. Candidate prognostic factors are pre-specified as: triple-positive aPL profile, prior arterial (vs. venous-only) index event, prior recurrence, systemic lupus erythematosus, sex, age, quality of VKA anticoagulation (time in therapeutic range), anticoagulant intensity, and — the factor of specific interest to this review — active malignancy. Each is analysed as a prognostic factor by default; a factor is escalated to Domain A (as a candidate treatment-effect modifier) only for the subset of studies that additionally report a treatment-stratified estimate or a formal interaction test for that specific factor."),

        h3("A necessary caution before either domain is populated: the three pivotal RCTs are not a homogeneous 'high-risk APS' block"),
        p("TRAPS, the trial by Ordi-Ros et al., and ASTRO-APS are the three RCTs most likely to anchor Domain A, but they are not assumed to be interchangeable or fully overlapping populations before formal extraction. TRAPS is the paradigmatic triple-positive trial; the antibody profile, arterial/venous history, precise inclusion criteria, and any protocol amendments of the other two must be extracted individually rather than inferred, and reported as such in Section 3 before any of the three is treated as representative of 'high-risk APS' as a category. The same caution applies, with even greater force and for the reasons given in Section 4.1, to the claim that these trials excluded active malignancy: this is plausible on standard trial-design grounds but is not yet a verified fact for any of the three, and the manuscript will state it only once confirmed against each trial's published eligibility criteria and supplementary materials, not before."),

        h3("Statistical methods — Domain A (therapeutic effect)"),
        bullet("Effect measures: hazard ratio (HR) preferred where time-to-event data are available; risk ratio (RR) for dichotomous outcomes without survival data; odds ratio (OR) only if neither is reported. HR and RR/OR will not be pooled together within the same analysis."),
        bullet("Rare events (e.g., arterial thrombosis, major bleeding in small strata): the routine 0.5 continuity correction will be avoided; Mantel-Haenszel without correction, Peto's method where arm sizes are approximately balanced, or a generalised linear mixed/binomial-normal model will be used as appropriate, with sensitivity analyses comparing methods for zero-event studies."),
        bullet("Model: random-effects, between-study variance (τ²) estimated by REML, with the Hartung-Knapp-Sidik-Jonkman adjustment to the confidence interval given the anticipated small number of contributing studies. Every pooled estimate will report the point estimate with 95% CI, τ², I², and the 95% prediction interval — the last of these particularly important here, since a favourable average effect can still conceal implausible-to-harmful effects in some plausible clinical contexts."),
        bullet("RCTs and observational comparative studies will be pooled separately as the primary analyses; a combined estimate will be presented only as a sensitivity analysis, given their differing susceptibility to confounding by indication. Risk of bias: RoB 2 for RCTs, ROBINS-I for non-randomised comparative studies of intervention."),
        bullet("Network meta-analysis across VKA, DOAC, and LMWH is not planned by default, for the transitivity reason given above: a pairwise-only approach will be used unless a specific, separately justified transitivity assessment supports extending to a network model."),
        bullet("Formal treatment × cancer-status and treatment × triple-positivity interaction tests will be run wherever the underlying studies support them (see Tier 2 below); an interaction will never be inferred informally from a pattern of 'significant in one stratum, not the other'."),
        bullet("Pre-specified Domain A subgroups (fixed and minimal, to avoid data-driven subgroup proliferation): specific DOAC agent (rivaroxaban vs. other DOACs) where reported; VKA intensity (INR 2.0–3.0 vs. higher-intensity regimens); RCT vs. observational design."),

        h3("Statistical methods — Domain B (prognostic factors)"),
        bullet("Adjusted estimates (from multivariable models) are the primary analysis for every prognostic factor; unadjusted/univariate estimates are pooled separately as a sensitivity analysis only, since crude associations for factors such as triple positivity are plausibly confounded by prior arterial event and by anticoagulant strategy itself. A minimal acceptable adjustment set will be defined a priori for each factor before extraction begins."),
        bullet("Effect measures are not mechanically converted and pooled across HR, OR, and RR; where a factor is reported with different measures across studies, these are synthesised in separate strata (with narrative comparison) rather than combined into one pooled number, except where a specific, justified transformation is pre-agreed."),
        bullet("Risk of bias for prognostic factor studies is assessed with QUIPS (Quality In Prognosis Studies) — not ROBINS-I, which applies to non-randomised studies of intervention (Domain A) rather than to prognostic-factor association studies (Domain B)."),
        bullet("GRADE certainty is rated separately for each Domain A outcome and each Domain B prognostic factor; the two domains are never combined into a single certainty rating."),

        h3("Escalation tiers for the cancer question specifically"),
        p("Given the tiers above apply generally, the cancer question is escalated through three specific, pre-specified levels, so that how far the analysis can go is dictated by what the literature supports rather than decided after the fact:"),
        bullet("Tier 1 (default target — a Domain B question): active malignancy is analysed as a pre-specified candidate prognostic factor for recurrence/bleeding in high-risk APS. This requires only that studies report cancer status as a covariate or subgroup — a materially lower evidentiary bar than Tier 2 — and, statistically, it is essential to distinguish a study that explicitly reports 'no cancer patients / cancer excluded by design' from one that simply does not report cancer status at all; the two are treated as different categories throughout data extraction (see Appendix C / the companion tracker), not conflated."),
        bullet("Tier 2 (conditional on data availability — a Domain A question): active malignancy is escalated to a candidate treatment-effect modifier only where a treatment-stratified estimate within both a cancer and a non-cancer stratum, or a formal treatment × cancer-status interaction term, is identified in at least two independent comparative sources. If, as anticipated pending verification, the three pivotal RCTs excluded active malignancy, Tier 2 depends entirely on observational APS cohorts/registries reporting this specific cross-classification, which have not yet been identified."),
        bullet("Tier 3 (aspirational, beyond the scope of this review): an individual patient data (IPD) meta-analysis modelling treatment × cancer, treatment × triple positivity, and their interaction, adjusting for age, sex, index event type, prior recurrence, tumour type/stage, active oncological treatment, and platelet count. This would require direct collaboration with the investigators of the existing RCTs and of major APS registries (e.g., APS ACTION), and is listed in the Research Agenda (Section 4.3) as a future collaborative initiative rather than a deliverable of the present review."),

        h3("General methodological safeguards (both domains)"),
        bullet("Meta-regression is considered only as an exploratory, hypothesis-generating analysis, and only if at least 8–10 contributing datasets are available for the factor in question, given the recognised risk of ecological bias and overfitting with aggregate-data meta-regression on fewer studies; it will not substitute for the pre-specified subgroup/prognostic-factor analyses above."),
        bullet("A descriptive incidence-rate synthesis (events per 100 patient-years by anticoagulant strategy in the oncological APS population) may additionally be reported for context, but will be explicitly labelled as hypothesis-generating and confounded by indication, not as a comparative efficacy or safety estimate."),
        bullet("Every pooled relative effect (Domain A) and every pooled adjusted association (Domain B) will be translated into an absolute-effect estimate (e.g., events avoided, incurred, or additionally identified per 1,000 patients), using a representative baseline risk drawn from the included studies, to support clinical interpretability."),

        h3("Figure 1 (schematic, to be rendered graphically in the final manuscript)"),
        p("High-risk thrombotic APS on anticoagulation → recurrent thrombosis, branching into two labelled determinant categories: (i) treatment-related — VKA / DOAC / LMWH, INR/time-in-therapeutic-range, anticoagulant intensity, adherence/switching (Domain A); (ii) patient/disease-related — triple positivity, arterial phenotype, prior recurrence, SLE, active malignancy (Domain B). Each arrow from a determinant to the outcome is visually labelled as either 'prognostic association demonstrated' or 'treatment-effect modification demonstrated', so the figure itself enforces the distinction this section is built around and makes immediately visible, for cancer specifically, which of the two (if either) the evidence actually supports."),

        p("A methodologically important possible outcome is stated explicitly here rather than left implicit: if this review confirms reasonably robust Domain A and Domain B evidence for high-risk thrombotic APS in general, alongside a near-total absence of evidence at the specific intersection of high-risk APS and active cancer, that contrast is a principal finding of the review, not a shortfall against its aims (see Section 1.5)."),

        new Paragraph({ children: [new PageBreak()] }),

        // 3. RESULTS placeholder
        h1("3. Results"),
        note("[This section is a placeholder skeleton. It will be populated once the searches described in Section 2.3 have been run against the databases and screened. Sections 3.1–3.5 below indicate the intended structure and the tables/figures to be generated.]"),
        h2("3.1 Study selection"),
        p("[Insert PRISMA-ScR flow diagram: records identified, duplicates removed, records screened, full texts assessed, studies included, with reasons for exclusion at full-text stage.]"),
        h2("3.2 Characteristics of included sources of evidence"),
        p("[Insert summary table: first author, year, country, design, population (A/B/C), sample size, tumour type(s), aPL profile, anticoagulant strategy, outcomes reported, follow-up duration.]"),
        h2("3.3 Terminology and case definitions across included studies"),
        p("[Narrative summary of how consistently — or inconsistently — included studies define aPL positivity, APS, and triple positivity, and the implications for comparability.]"),
        h2("3.4 Mapping of populations A, B, and C"),
        p("[Quantify how many included studies/patients fall into population A (oncological patients with simple aPL positivity), B (oncological patients with defined APS), and C (oncological patients with high-risk/triple-positive APS), and identify where population C data are absent or limited to single cases.]"),
        h2("3.5 Anticoagulant strategies and outcomes reported"),
        p("[Descriptive, non-pooled synthesis of anticoagulant choices, switching strategies, and thrombotic/haemorrhagic outcomes reported, stratified by population A/B/C where possible.]"),

        new Paragraph({ children: [new PageBreak()] }),

        // 4. DISCUSSION
        h1("4. Discussion"),

        h2("4.1 Two guideline universes that do not intersect"),
        p("The findings summarised in Section 1 and mapped in Section 3 illustrate a structural gap rather than a simple absence of data: the APS literature and the cancer-associated thrombosis literature have each matured independently, with robust randomized evidence internal to each field, but essentially no evidence generated at their intersection. This is not attributable to oversight so much as to trial design — RCTs of anticoagulation in APS have systematically enrolled patients without active malignancy (a common, often explicit, exclusion criterion), while RCTs and large cohorts underlying cancer-associated thrombosis guidelines have not documented or stratified by aPL/APS status. The result is that any anticoagulant decision made today in a patient with high-risk APS and active cancer is, by necessity, an extrapolation from two literatures that were never designed to speak to one another."),

        h2("4.2 A scenario-based clinical framework"),
        p("The framework below organises the decision-making problem by clinical scenario rather than by drug class, since the practical challenge described by clinicians managing these patients is less “which drug is superior” than “which drug remains feasible and acceptably safe under this specific set of circumstances”. For each scenario, the evidentiary basis is graded per the scheme in Section 2.6."),

        h3("4.2.1 Clinically stable patient, adequate oral intake, no acute oncological toxicity"),
        p("For a patient with high-risk/triple-positive APS whose oncological disease and treatment are not currently affecting gastrointestinal function, nutritional intake, or platelet count, the randomized evidence generated in APS populations without active cancer [1–4] provides direct guidance in favour of VKA therapy, with the important caveat that these trials did not include oncological patients and thus this remains, strictly speaking, evidence extrapolated across a stable-disease boundary rather than fully direct evidence for the combined population. [Grading: indirect/extrapolated — high-quality APS evidence, no cancer-specific validation.]"),

        h3("4.2.2 Chemotherapy without significant mucositis or gastrointestinal toxicity"),
        p("In the absence of mucositis, vomiting, or major changes in oral intake, the principal added consideration is drug–drug interaction via cytochrome P450 3A4 and P-glycoprotein pathways shared by several DOACs and chemotherapeutic, antiemetic, and supportive-care agents, as discussed in general reviews of anticoagulation strategy selection in cancer patients [19] and in a 2026 scientific statement on DOAC use in primary and secondary prevention of thrombotic events [22]. [Grading: indirect/extrapolated — evidence from general oncology anticoagulation literature [19,22], not from an APS-defined cancer population; expert opinion regarding net balance against APS-specific arterial risk.]"),

        h3("4.2.3 Radiotherapy with anticipated or established mucositis, dysphagia, nausea or vomiting"),
        p("Absorption of all currently available DOACs depends on gastrointestinal integrity; apixaban, rivaroxaban, and edoxaban are absorbed predominantly in the stomach and proximal small bowel (apixaban also to a lesser extent in the proximal colon), while dabigatran additionally requires an acidic gastric environment for prodrug conversion. Mucositis, dysphagia, and vomiting — common toxicities of head and neck radiotherapy and of several chemotherapy regimens — can plausibly compromise DOAC absorption and reliability, whereas LMWH, which does not depend on oral intake or gastrointestinal absorption, is unaffected by this specific mechanism. A dedicated practical review specifically addresses DOAC management in cancer patients with nausea or vomiting [20], and a retrospective evaluation of DOAC management strategies in patients with cancer on active chemotherapy found that nausea/vomiting infrequently led to DOAC discontinuation in practice (most patients were continued without modification), while still recommending close clinical surveillance [21]; a 2026 ACC scientific statement likewise notes a modestly higher bleeding-risk signal with DOACs relative to LMWH in patients with anorexia or vomiting [22]. [Grading: indirect/extrapolated — direct evidence exists for DOAC behaviour under nausea/vomiting/mucositis in general oncology populations [20,21,22], but not specifically in patients with high-risk/triple-positive APS.] For a patient with high-risk APS in this situation, LMWH represents a pragmatic option that avoids both the mucosal-absorption problem of DOACs and the food-and-intake dependency of VKA/INR stability, while direct comparative data confirming its efficacy specifically in high-risk/triple-positive APS remain absent, and the recommendation to favour LMWH over a DOAC in this scenario is, for the APS-specific component, still expert opinion/pathophysiological reasoning."),

        h3("4.2.4 Thrombocytopenia related to myelosuppressive chemotherapy"),
        p("Cancer-associated thrombosis guidance provides algorithms for dose modification, transfusion support, or temporary use of a removable inferior vena cava filter according to platelet count and recency/recurrence of thrombosis [14]. No dedicated data address whether these thresholds should be modified for patients with high-risk/triple-positive APS, in whom the added arterial thrombotic risk and the specific hazard associated with sub-therapeutic anticoagulation may argue for a lower threshold for maintaining full-intensity anticoagulation with transfusion support. [Grading: extrapolated from cancer-associated thrombosis guidance [14]; expert opinion regarding APS-specific modification.]"),

        h3("4.2.5 Invasive procedures and surgery"),
        p("Periprocedural anticoagulation management in APS and in cancer-associated thrombosis have each been addressed separately in guidance documents [13,14], but no combined protocol exists. The theoretical concern specific to high-risk APS is that even brief interruption of anticoagulation may carry a disproportionate thrombotic risk relative to non-APS patients, a concern that is compounded, rather than resolved, by the procedural and nutritional disruptions typical of oncological surgery. [Grading: expert opinion — no direct or indirect quantitative data identified for the combined population.]"),

        h3("4.2.6 Unstable INR / reduced time in therapeutic range during active treatment"),
        p("Time in therapeutic range (TTR) is a recognised determinant of both thrombotic recurrence and bleeding risk in VKA-treated APS patients, and reliable INR monitoring in thrombotic APS carries specific, well-documented pitfalls — including lupus-anticoagulant interference with certain thromboplastin reagents — independently of any oncological factor [12]. Factors common during active cancer treatment — variable dietary vitamin K intake, antibiotic courses, hepatic dysfunction, and drug interactions — are separately recognised, non-APS-specific causes of reduced TTR. Whether the two sets of factors compound one another in oncological APS patients specifically has not, to our knowledge, been directly studied. [Grading: indirect/extrapolated — direct evidence on INR monitoring difficulty in thrombotic APS exists [12], but not combined with an oncological population; expert opinion for the combined effect.]"),

        h3("4.2.7 Breakthrough (recurrent) thrombosis during anticoagulation"),
        p("For cancer-associated thrombosis occurring despite therapeutic anticoagulation, a dedicated “How I Treat” analysis and NCCN guidance both provide structured algorithms according to the failing agent (e.g., switching from a reduced-dose to full-dose DOAC, switching class, or increasing LMWH frequency or dose) [14,23]. For breakthrough thrombosis in APS outside the oncological setting, guidance similarly favours optimisation or switching, generally toward or within VKA/heparin-based strategies rather than toward a DOAC [5,10,11]. In a patient with both conditions, applying the APS-oriented approach (favouring VKA/heparin-class escalation over DOAC initiation) appears the more conservative and mechanistically consistent choice, though this has not been directly tested. [Grading: indirect/extrapolated — direct, dedicated evidence exists for breakthrough thrombosis in cancer [14,23] and separately for breakthrough thrombosis in APS [5,10,11], but not for the combined population; expert opinion on reconciling the two approaches.]"),

        h3("4.2.8 Major or clinically relevant non-major bleeding"),
        p("The randomized APS evidence found no significant difference in major bleeding between DOACs and VKAs [4]; cancer-associated thrombosis literature separately documents bleeding risk according to tumour site, thrombocytopenia, and agent class [REF]. No data address whether bleeding risk is additive, synergistic, or otherwise modified when both conditions coexist. [Grading: indirect evidence from two separate literatures; no direct data for the combined population.]"),

        h2("4.3 Research agenda"),
        p("The scenario-based framework above is, by design, heavily weighted toward extrapolation and expert opinion rather than direct evidence — a finding that is itself a principal result of this review. We propose that future research prioritise:"),
        bullet("Prospective, multicentre registry data systematically capturing aPL profile (including full triple-positivity status) in patients with cancer-associated thrombosis, to establish the true prevalence and prognostic relevance of high-risk aPL profiles in this population."),
        bullet("Structured sub-group reporting of oncological status (active malignancy, treatment modality, treatment phase) within existing and future APS cohorts and registries (e.g., APS ACTION)."),
        bullet("Standardised, ISTH-defined outcome reporting (recurrent VTE, arterial thrombosis, major bleeding, clinically relevant non-major bleeding, TTR where applicable) specifically in the combined population, to permit future meta-analysis once a sufficient number of comparable studies exist."),
        bullet("Explicit reporting, in future case reports and series, of oncological treatment phase and toxicity at the time of any thrombotic or haemorrhagic event, to allow scenario-specific signal detection of the type modelled in Section 4.2."),
        bullet("As the methodologically strongest future step, a collaborative individual patient data (IPD) meta-analysis bringing together the investigators of the existing high-risk APS RCTs (TRAPS, Ordi-Ros et al., ASTRO-APS) and major APS registries (e.g., APS ACTION), specifically to model treatment × cancer-status and treatment × triple-positivity interactions with adjustment for arterial/venous index event, prior recurrence, tumour type/stage, active oncological treatment, and platelet count — see Section 2.7, Tier 3. This exceeds the scope of the present review but is, in our assessment, the only design realistically capable of answering the research question with the precision the clinical problem deserves."),

        new Paragraph({ children: [new PageBreak()] }),

        // 5. LIMITATIONS
        h1("5. Limitations"),
        bullet("As a scoping review, this work is not designed to, and will not, provide a pooled quantitative estimate of comparative efficacy or safety between anticoagulant strategies; readers should not interpret the clinical framework in Section 4.2 as equivalent in evidentiary strength to a systematic review with meta-analysis."),
        bullet("The clinical framework relies substantially on extrapolation from two literatures (APS-specific and cancer-associated thrombosis–specific) that were not designed to inform management of the combined population, and on expert reasoning where neither literature applies; this is stated explicitly for each scenario in Section 4.2 rather than implied."),
        bullet("Publication and reporting bias likely affects the case report/case series literature underlying population C (oncological patients with high-risk/triple-positive APS) most severely, as unusual or dramatic presentations are more likely to be reported than uneventful management."),
        bullet("[Additional limitations to be completed once the search and charting process is finalised — e.g., language restrictions, grey literature coverage, inter-rater agreement at screening.]"),

        // 6. CONCLUSIONS
        h1("6. Conclusions"),
        p("[Placeholder — to be finalised once Sections 3 and 4 are complete with the full literature base. Provisional conclusion, consistent with the feasibility analysis underlying this protocol: current evidence is insufficient to determine whether the presence of active malignancy should alter the choice, efficacy, or safety of anticoagulant therapy in patients with high-risk/triple-positive APS. Management in this setting is currently guided by extrapolation from two non-overlapping evidence bases and by expert opinion rather than by direct comparative data, a gap that this review aims to document systematically and for which a structured research agenda is proposed.]"),

        new Paragraph({ children: [new PageBreak()] }),

        // REFERENCES
        h1("References"),
        note("The list below includes only sources whose existence was corroborated through literature search performed for this project. Full bibliographic details (complete author lists, exact volume/issue/page numbers, DOIs) should be verified against the original publications before submission — fields not independently confirmed are marked “[verify]”. Numbered [REF] placeholders in the text above correspond to sources not yet verified and should be completed once the corresponding full texts are supplied."),
        p("1. Pengo V, et al. Rivaroxaban vs. warfarin in high-risk patients with antiphospholipid syndrome (TRAPS trial). Blood. 2018 [volume/issue/pages: verify]."),
        p("2. Ordi-Ros J, et al. Rivaroxaban Versus Vitamin K Antagonist in Antiphospholipid Syndrome: A Randomized Trial. Ann Intern Med. 2019 [volume/issue/pages: verify]."),
        p("3. Woller SC, et al. Apixaban compared with warfarin to prevent thrombosis in thrombotic antiphospholipid syndrome: a randomized trial. Blood Adv. 2022;6(6):1661 [end page/author list: verify]."),
        p("4. Khairani CD, et al. Direct Oral Anticoagulants vs Vitamin K Antagonists in Patients With Antiphospholipid Syndromes: Meta-Analysis of Randomized Trials. J Am Coll Cardiol. 2023. DOI: 10.1016/j.jacc.2022.10.008 [full author list/pages: verify]."),
        p("5. Tektonidou MG, et al. EULAR recommendations for the management of antiphospholipid syndrome in adults. Ann Rheum Dis. 2019;78:1296–1304. PMID: 31092409."),
        p("6. [Cureus case report] Cancer History, Antiphospholipid Syndrome, and Lupus Anticoagulant: A Perfect Storm for Thrombosis. Cureus [author list/year/volume: verify; PMC11769576]."),
        p("7. Impact of antiphospholipid antibodies on thrombotic events in ambulatory cancer patients. PLOS ONE. DOI: 10.1371/journal.pone.0279450 [author list/year: verify]."),
        p("8. Systematic review of observational studies reporting antiphospholipid antibodies in patients with solid tumors. Blood Adv. 2020;4(8):1746 [end page/author list: verify]."),
        p("9. Garcia D, Erkan D. Diagnosis and Management of the Antiphospholipid Syndrome. N Engl J Med. 2018 [volume/issue/pages: verify]."),
        p("10. Ruiz-Irastorza G, Tektonidou MG, Khamashta M. Anticoagulant and Non-Anticoagulant Therapy in Thrombotic Antiphospholipid Syndrome: Old Drugs and New Treatment Targets. Rheumatology (Oxford). 2024 [volume/issue/pages: verify]."),
        p("11. Paredes-Ruiz D, Martin-Iglesias D, Ruiz-Irastorza G. Thrombotic Antiphospholipid Syndrome: From Guidelines to Clinical Management. Med Clin (Barc). 2024 [volume/issue/pages: verify]."),
        p("12. Cohen H, Efthymiou M, Devreese KMJ. Monitoring of Anticoagulation in Thrombotic Antiphospholipid Syndrome. J Thromb Haemost. 2021 [volume/issue/pages: verify]."),
        p("13. Stevens SM, Woller SC, Kreuziger LB, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021 [volume/issue/pages: verify]."),
        p("14. National Comprehensive Cancer Network. Cancer-Associated Venous Thromboembolic Disease [NCCN Clinical Practice Guidelines in Oncology]. Updated 2026-05-05 [full version/access date: verify]."),
        p("15. Farge D, Frere C, Connors JM, et al. 2022 International Clinical Practice Guidelines for the Treatment and Prophylaxis of Venous Thromboembolism in Patients With Cancer, Including Patients With COVID-19. Lancet Oncol. 2022 [volume/issue/pages: verify]."),
        p("16. Farge D, Bounameaux H, Brenner B, et al. International Clinical Practice Guidelines Including Guidance for Direct Oral Anticoagulants in the Treatment and Prophylaxis of Venous Thromboembolism in Patients With Cancer. Lancet Oncol. 2016 [volume/issue/pages: verify]."),
        p("17. Key NS, Khorana AA, Kuderer NM, et al. Venous Thromboembolism Prophylaxis and Treatment in Patients With Cancer: ASCO Guideline Update. J Clin Oncol. 2023 [volume/issue/pages: verify]."),
        p("18. Lyon AR, López-Fernández T, Couch LS, et al. 2022 ESC Guidelines on Cardio-Oncology. Eur Heart J. 2022 [volume/issue/pages: verify]."),
        p("19. Mosarla RC, Vaduganathan M, Qamar A, et al. Anticoagulation Strategies in Patients With Cancer: JACC Review Topic of the Week. J Am Coll Cardiol. 2019 [volume/issue/pages: verify]."),
        p("20. Riess H, Ay C, Bauersachs R, et al. Use of Direct Oral Anticoagulants in Patients With Cancer: Practical Considerations for the Management of Patients With Nausea or Vomiting. Oncologist. 2018 [volume/issue/pages: verify]."),
        p("21. Tran E, Ledbetter LE. A Retrospective Evaluation of Direct Oral Anticoagulant (DOAC) Management Strategies in Patients With Cancer on Active Chemotherapy. J Thromb Thrombolysis. 2023 [volume/issue/pages: verify]."),
        p("22. Direct Oral Anticoagulants in Primary and Secondary Prevention of Thrombotic Events: 2026 ACC Scientific Statement. J Am Coll Cardiol. 2026 [full author list/volume/issue/pages: verify — title truncated in source, to confirm]."),
        p("23. Marx CE, Carrier M. How I Treat Breakthrough Thrombosis in Patients With Cancer. Blood. 2026 [volume/issue/pages: verify]."),
        p("24. Efficacy and safety of direct oral anticoagulants compared with warfarin in antiphospholipid syndrome. Results of a multicenter retrospective cohort study. PMID: 40488177, 2025 [journal name/volume/issue/pages/full author list: verify — identified via literature search in this session, not yet read in full text; logged in the companion tracker's Study_Effects tab, rows 4–5]."),
        p("References 9–23 above were supplied by the corresponding author from an OpenEvidence literature search; reference 24 was identified independently via web literature search during manuscript drafting. In both cases, existence is accepted on that basis, but full bibliographic details (exact volume/issue/page numbers, complete author lists, DOIs) have not been independently re-verified against the primary source in this session and should be checked when the full texts are reviewed.", { italic: true }),
        p("[Additional references still to be added: 2023 ACR/EULAR APS classification criteria; British Society for Haematology APS guideline; EMA/FDA safety communications on DOACs in APS; PRISMA-ScR statement (Tricco et al., 2018); JBI Manual for Evidence Synthesis (Peters et al.).]", { italic: true }),

        new Paragraph({ children: [new PageBreak()] }),

        // APPENDICES
        h1("Appendix A. Inclusion and exclusion criteria (preliminary)"),
        h3("Inclusion"),
        bullet("Adult patients (≥18 years) with APS per recognised classification criteria, or with persistently positive aPL explicitly reported as single/double/triple positive."),
        bullet("Current or past diagnosis of solid or haematological malignancy."),
        bullet("Any reported anticoagulant management strategy and at least one thrombotic, haemorrhagic, or treatment-continuity outcome."),
        bullet("Any study design (RCT, cohort, registry, case series, case report), charted according to design."),
        h3("Exclusion"),
        bullet("Isolated, non-persistent aPL positivity without confirmatory retesting."),
        bullet("Obstetric APS without a thrombotic component."),
        bullet("Cancer cohorts not reporting aPL/APS status."),
        bullet("Conference abstracts without extractable data."),
        bullet("Paediatric populations."),
        bullet("Reviews/editorials/commentaries without original data (tracked separately for citation purposes only)."),

        h1("Appendix B. Data extraction variables"),
        new Table({
          columnWidths: [2600, 6800],
          width: { size: 9400, type: WidthType.DXA },
          rows: [
            row([cell("Category", { width: 2600, bold: true, shade: "D9D9D9" }), cell("Variables", { width: 6800, bold: true, shade: "D9D9D9" })]),
            row([cell("Study identification", { width: 2600 }), cell("First author, year, journal, country, study design", { width: 6800 })]),
            row([cell("Population", { width: 2600 }), cell("N, age, sex, APS classification criteria used, aPL profile (single/double/triple), LAC/aCL/anti-β2GPI titres, population group (A/B/C)", { width: 6800 })]),
            row([cell("Malignancy", { width: 2600 }), cell("Tumour type, stage, active oncological treatment (chemotherapy/radiotherapy/targeted/immunotherapy), timing relative to APS diagnosis", { width: 6800 })]),
            row([cell("Index event", { width: 2600 }), cell("Thrombosis type (venous/arterial/microvascular), site, provoked vs. unprovoked", { width: 6800 })]),
            row([cell("Anticoagulant management", { width: 2600 }), cell("Agent, dose, INR target if VKA, duration, switches performed and rationale", { width: 6800 })]),
            row([cell("Thrombotic outcomes", { width: 2600 }), cell("Recurrent VTE, recurrent arterial thrombosis, time to event", { width: 6800 })]),
            row([cell("Haemorrhagic outcomes", { width: 2600 }), cell("Major bleeding (ISTH definition), clinically relevant non-major bleeding", { width: 6800 })]),
            row([cell("Other outcomes", { width: 2600 }), cell("Time in therapeutic range (if VKA), mortality, treatment discontinuation and reason, periprocedural management", { width: 6800 })]),
            row([cell("Effect estimate domain", { width: 2600 }), cell("Domain A (therapeutic comparison) or Domain B (prognostic factor association); for Domain B, adjusted vs. unadjusted and the covariate adjustment set", { width: 6800 })]),
            row([cell("Quality/bias indicators", { width: 2600 }), cell("RoB 2 (RCTs) / ROBINS-I (non-randomised comparative studies, Domain A) / QUIPS (prognostic factor studies, Domain B); follow-up duration, losses to follow-up, funding source, conflicts of interest", { width: 6800 })]),
          ],
        }),

        p("", { spacingAfter: 100 }),
        h1("Appendix C. Working strategy and notes for the next session"),
        h3("Two-track working strategy"),
        p("Literature identified for this project (including case reports and case series) is logged patient-by-patient in a companion file, APS_Cancer_Literature_Tracker.xlsx, whose Dashboard tab auto-tallies the pre-specified pooling criteria set out in Section 2.6. The two tracks proceed in parallel and are not contingent on one another: (i) the scoping review and scenario-based clinical framework in Sections 3–4 are updated as each new source is charted, regardless of whether pooling ever becomes justified, and constitute the guaranteed deliverable of this project; (ii) a quantitative synthesis is added only if and when the tracker's Dashboard confirms the Section 2.6 criteria are met. This way, a negative or inconclusive feasibility verdict from the tracker does not cost the project its main output — it only determines whether Section 3 ends with a descriptive table or with an additional pooled-analysis subsection."),
        h3("Standing to-do list"),
        bullet("Upload full texts of the studies referenced with [verify] or [REF] above so exact citations can be confirmed and completed."),
        bullet("Confirm authorship, affiliations, and corresponding author details for the title page."),
        bullet("Decide screening software (Rayyan/Covidence) and OSF registration details before finalising Section 2."),
        bullet("Each time the tracker is updated with new studies: (a) update Section 3 (Results) with the new study count and characteristics; (b) revisit Section 4.2 to upgrade any scenario's evidence grading from extrapolated/expert opinion to direct evidence wherever the new source applies; (c) re-check the Section 2.6 pooling criteria and, once met, draft the corresponding meta-analytic methods/results subsections."),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/user/research-uniGE/manuscript/APS_Cancer_Anticoagulation_Manuscript_v0.6.docx", buffer);
  console.log("done");
});
