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
        p("Anticoagulation in High-Risk Antiphospholipid Syndrome and Active Cancer: A Scoping Review and Clinical Framework", { bold: true, size: 32, align: AlignmentType.CENTER, spacingAfter: 300 }),
        p("Working title — draft manuscript v0.1", { italic: true, align: AlignmentType.CENTER, size: 22, spacingAfter: 100 }),
        p("Running title: Anticoagulation in high-risk APS with cancer", { align: AlignmentType.CENTER, size: 22, spacingAfter: 400 }),
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
        p("To map the available evidence on anticoagulant management in patients with high-risk/triple-positive APS and concurrent cancer, and to synthesise a clinical framework distinguishing evidence-based, extrapolated, and expert-opinion–based recommendations across common oncological scenarios."),
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
        p("Antiphospholipid syndrome (APS) is an acquired, autoimmune thrombophilia defined by the persistent presence of antiphospholipid antibodies (aPL) — lupus anticoagulant (LAC), anticardiolipin antibodies (aCL), and anti-β2-glycoprotein I antibodies (anti-β2GPI) — in patients with vascular thrombosis and/or pregnancy morbidity [REF: 2023 ACR/EULAR APS classification criteria]. Persistence of antibody positivity on two occasions at least 12 weeks apart, together with the number and combination of positive assays, is central to both diagnosis and risk stratification."),
        p("A key concept for the present work is the distinction between the number of positive aPL assays. Patients positive for all three antibody types — LAC, aCL, and anti-β2GPI, so-called “triple positivity” — together with patients otherwise classified as having a “high-risk aPL profile”, carry a substantially higher cumulative incidence of thrombotic recurrence, both venous and arterial, than single- or double-positive patients [1]. Across international recommendations, triple-positive/high-risk APS is treated as a distinct clinical phenotype requiring a different therapeutic approach from lower-risk profiles, rather than as a simple summation of individual antibody risks."),

        h2("1.2 High-risk/triple-positive APS: the case for vitamin K antagonists"),
        p("Three randomized controlled trials have directly compared a DOAC with a VKA in patients with thrombotic APS. The Rivaroxaban in Antiphospholipid Syndrome (TRAPS) trial enrolled patients with triple-positive APS and was terminated prematurely after an excess of arterial thrombotic events, predominantly stroke, occurred in the rivaroxaban arm [1]. A second open-label trial by Ordi-Ros et al. compared rivaroxaban with a VKA in a broader thrombotic APS population and likewise reported a signal toward increased arterial events with rivaroxaban [2]. The Apixaban for the Secondary Prevention of Thromboembolism among patients with APS (ASTRO-APS) trial subsequently found that apixaban did not perform as an equivalent substitute for warfarin [3]."),
        p("A meta-analysis of these randomized trials by Khairani et al. confirmed that, compared with VKAs, DOACs were associated with an increased risk of arterial thrombotic events, with no significant difference in venous thromboembolism (VTE) recurrence or major bleeding; the risk appeared highest among triple-positive patients and with rivaroxaban specifically [4]. On this basis, the European Medicines Agency and, subsequently, the US Food and Drug Administration issued warnings against the use of DOACs in patients with APS, particularly those with triple positivity or a history of arterial thrombosis [REF: EMA/FDA safety communications]. Contemporary guidance — including the 2019 EULAR recommendations for the management of APS in adults [5], the International Society on Thrombosis and Haemostasis Scientific and Standardization Committee (ISTH SSC) guidance [REF], and the British Society for Haematology guideline [REF] — converge in recommending VKA therapy (target INR 2.0–3.0, or higher for recurrent or arterial disease per local protocol) as the standard of care for triple-positive or otherwise high-risk thrombotic APS, reserving DOACs for selected lower-risk, venous-only, single/double-positive patients under specific circumstances (e.g., patients already stable on a DOAC, inability or unwillingness to undergo INR monitoring, or VKA contraindication)."),
        p("The mechanistic basis for the differential performance of DOACs and VKAs in high-risk APS is not fully established. Proposed explanations — including differential effects on thrombin generation, complement activation, and antibody-mediated endothelial and monocyte activation compared with the broader, multi-factor anticoagulant effect of VKAs — remain hypothesis-generating rather than proven [REF]. This mechanistic uncertainty is noted here as an explicit limitation of current understanding, not as an established causal explanation."),

        h2("1.3 Cancer-associated thrombosis: the modern paradigm"),
        p("Independently of the APS literature, contemporary guidelines for cancer-associated venous thromboembolism — including the National Comprehensive Cancer Network (NCCN) guidance, the 2022 International Initiative on Thrombosis and Cancer (ITAC) clinical practice guidelines, American Society of Clinical Oncology (ASCO) guidance, and the 2022 European Society of Cardiology (ESC) Cardio-Oncology guidelines — recommend either a DOAC (apixaban, rivaroxaban, or edoxaban) or LMWH as first-line therapy, generally for a minimum of three to six months and, in practice, for as long as the malignancy remains active or under treatment [REF: NCCN; REF: ITAC 2022; REF: ESC 2022]. Choice between agents is guided by renal and hepatic function, gastrointestinal or genitourinary tumour site (favouring LMWH because of bleeding risk with DOACs), bleeding risk, thrombocytopenia, and patient preference."),
        p("Critically for the present review, the pivotal trials and guideline documents underlying this paradigm were neither designed nor powered to identify, let alone stratify recommendations by, the presence of an antiphospholipid antibody profile. The cancer-associated thrombosis literature and the APS literature have therefore developed as two internally coherent but essentially non-overlapping evidence bases."),

        h2("1.4 Rationale: a clinical and scientific collision"),
        p("When high-risk or triple-positive APS and active malignancy coexist in the same patient, two evidence-based guideline bodies point toward different first-line agents. This is not merely a theoretical tension. Active oncological treatment introduces practical and biological factors that specifically threaten the feasibility of VKA therapy — the drug of choice in high-risk APS — including chemotherapy- or radiotherapy-induced mucositis, nausea and vomiting, variable oral intake and vitamin K consumption, drug–drug interactions with chemotherapeutic and supportive-care agents, thrombocytopenia complicating both therapeutic-intensity anticoagulation and bleeding risk, and recurrent need for temporary interruption around invasive procedures or catheter placement."),
        p("Available literature at this specific intersection is currently limited to isolated case reports and small, largely descriptive case series. A recent case report explicitly frames the coexistence of cancer, APS, and lupus anticoagulant as a “perfect storm” for thrombosis, illustrating the clinical dilemma but without offering a generalisable management strategy [6]. Separately, prospective cohort data in ambulatory cancer patients receiving chemotherapy show a higher prevalence of aPL positivity and a higher rate of thrombotic events among aPL-positive patients compared with aPL-negative controls [7]; a systematic review of observational studies has similarly documented an elevated prevalence of aPL in patients with solid tumours [8]. These data, however, concern aPL positivity — often low-titre and transient — in unselected oncological populations, and do not describe patients meeting classification criteria for APS, still less triple-positive APS. To our knowledge, no cohort study, registry, or comparative study has specifically addressed anticoagulant strategy, efficacy, or safety in patients with defined high-risk/triple-positive APS and concurrent active cancer."),
        p("This distinction — between (A) oncological patients with simple, often transient aPL positivity, (B) oncological patients with clinically defined APS, and (C) oncological patients with high-risk/triple-positive APS — is maintained throughout this review and is central to interpreting the existing literature without over-extrapolating findings from one population to another."),

        h2("1.5 Objectives"),
        bullet("Primary aim: to systematically map, using scoping review methodology, the existing evidence on anticoagulant management of patients with high-risk/triple-positive APS and active or recent malignancy, explicitly distinguishing populations A, B, and C above."),
        bullet("Secondary aim: to synthesise, from this evidence map together with directly relevant APS and cancer-associated thrombosis literature, a clinical decision framework spanning common oncological scenarios (stable disease, chemotherapy, radiotherapy-induced mucositis, thrombocytopenia, invasive procedures, unstable anticoagulation control, breakthrough thrombosis, and major bleeding), with each recommendation explicitly graded by the nature of its evidentiary basis."),

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
        p("[REF needed: pharmacokinetic/interaction data on specific chemotherapeutic regimens.] In the absence of mucositis, vomiting, or major changes in oral intake, the principal added consideration is drug–drug interaction via cytochrome P450 3A4 and P-glycoprotein pathways shared by several DOACs and chemotherapeutic, antiemetic, and supportive-care agents. [Grading: extrapolated from general oncology/pharmacology literature and cancer-associated thrombosis guidance; expert opinion regarding net balance against APS-specific arterial risk.]"),

        h3("4.2.3 Radiotherapy with anticipated or established mucositis, dysphagia, nausea or vomiting"),
        p("Absorption of all currently available DOACs depends on gastrointestinal integrity; apixaban, rivaroxaban, and edoxaban are absorbed predominantly in the stomach and proximal small bowel (apixaban also to a lesser extent in the proximal colon), while dabigatran additionally requires an acidic gastric environment for prodrug conversion. Mucositis, dysphagia, and vomiting — common toxicities of head and neck radiotherapy and of several chemotherapy regimens — can plausibly compromise DOAC absorption and reliability, whereas LMWH, which does not depend on oral intake or gastrointestinal absorption, is unaffected by this specific mechanism. [Grading: expert opinion/pathophysiological reasoning for the combined population; indirect evidence from general oncology literature — REF needed — describing DOAC continuation rates during chemotherapy-induced nausea/vomiting in non-APS cancer patients.] For a patient with high-risk APS in this situation, LMWH represents a pragmatic option that avoids both the mucosal-absorption problem of DOACs and the food-and-intake dependency of VKA/INR stability, while direct comparative data confirming its efficacy specifically in high-risk/triple-positive APS are lacking."),

        h3("4.2.4 Thrombocytopenia related to myelosuppressive chemotherapy"),
        p("Cancer-associated thrombosis guidance provides algorithms for dose modification, transfusion support, or temporary use of a removable inferior vena cava filter according to platelet count and recency/recurrence of thrombosis [REF: NCCN]. No dedicated data address whether these thresholds should be modified for patients with high-risk/triple-positive APS, in whom the added arterial thrombotic risk and the specific hazard associated with sub-therapeutic anticoagulation may argue for a lower threshold for maintaining full-intensity anticoagulation with transfusion support. [Grading: extrapolated from cancer-associated thrombosis guidance; expert opinion regarding APS-specific modification.]"),

        h3("4.2.5 Invasive procedures and surgery"),
        p("Periprocedural anticoagulation management in APS and in cancer-associated thrombosis have each been addressed separately in guidance documents [REF], but no combined protocol exists. The theoretical concern specific to high-risk APS is that even brief interruption of anticoagulation may carry a disproportionate thrombotic risk relative to non-APS patients, a concern that is compounded, rather than resolved, by the procedural and nutritional disruptions typical of oncological surgery. [Grading: expert opinion — no direct or indirect quantitative data identified for the combined population.]"),

        h3("4.2.6 Unstable INR / reduced time in therapeutic range during active treatment"),
        p("Time in therapeutic range (TTR) is a recognised determinant of both thrombotic recurrence and bleeding risk in VKA-treated APS patients, and factors common during active cancer treatment — variable dietary vitamin K intake, antibiotic courses, hepatic dysfunction, and drug interactions — are all recognised, non-APS-specific causes of reduced TTR. Whether these factors have a disproportionate impact on TTR specifically in oncological APS patients has not, to our knowledge, been directly studied. [Grading: expert opinion/pharmacological reasoning; no direct data identified.]"),

        h3("4.2.7 Breakthrough (recurrent) thrombosis during anticoagulation"),
        p("For cancer-associated thrombosis occurring despite therapeutic anticoagulation, NCCN guidance provides a structured algorithm according to the failing agent (e.g., switching from a reduced-dose to full-dose DOAC, switching class, or increasing LMWH frequency or dose) [REF: NCCN]. For breakthrough thrombosis in APS outside the oncological setting, guidance similarly favours optimisation or switching, generally toward or within VKA/heparin-based strategies rather than toward a DOAC [REF: EULAR/ISTH]. In a patient with both conditions, applying the APS-oriented approach (favouring VKA/heparin-class escalation over DOAC initiation) appears the more conservative and mechanistically consistent choice, though this has not been directly tested. [Grading: extrapolated from two separate, non-overlapping guideline bodies; expert opinion on reconciliation.]"),

        h3("4.2.8 Major or clinically relevant non-major bleeding"),
        p("The randomized APS evidence found no significant difference in major bleeding between DOACs and VKAs [4]; cancer-associated thrombosis literature separately documents bleeding risk according to tumour site, thrombocytopenia, and agent class [REF]. No data address whether bleeding risk is additive, synergistic, or otherwise modified when both conditions coexist. [Grading: indirect evidence from two separate literatures; no direct data for the combined population.]"),

        h2("4.3 Research agenda"),
        p("The scenario-based framework above is, by design, heavily weighted toward extrapolation and expert opinion rather than direct evidence — a finding that is itself a principal result of this review. We propose that future research prioritise:"),
        bullet("Prospective, multicentre registry data systematically capturing aPL profile (including full triple-positivity status) in patients with cancer-associated thrombosis, to establish the true prevalence and prognostic relevance of high-risk aPL profiles in this population."),
        bullet("Structured sub-group reporting of oncological status (active malignancy, treatment modality, treatment phase) within existing and future APS cohorts and registries (e.g., APS ACTION)."),
        bullet("Standardised, ISTH-defined outcome reporting (recurrent VTE, arterial thrombosis, major bleeding, clinically relevant non-major bleeding, TTR where applicable) specifically in the combined population, to permit future meta-analysis once a sufficient number of comparable studies exist."),
        bullet("Explicit reporting, in future case reports and series, of oncological treatment phase and toxicity at the time of any thrombotic or haemorrhagic event, to allow scenario-specific signal detection of the type modelled in Section 4.2."),

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
        p("[Additional references to be added: 2023 ACR/EULAR APS classification criteria; ISTH SSC guidance on DOAC use in APS; British Society for Haematology APS guideline; NCCN Cancer-Associated Venous Thromboembolic Disease guideline; ITAC 2022 (Lancet Oncology); 2022 ESC Cardio-Oncology guidelines; EMA/FDA safety communications on DOACs in APS; PRISMA-ScR statement (Tricco et al., 2018); JBI Manual for Evidence Synthesis (Peters et al.).]", { italic: true }),

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
            row([cell("Quality/bias indicators", { width: 2600 }), cell("Follow-up duration, losses to follow-up, funding source, conflicts of interest", { width: 6800 })]),
          ],
        }),

        p("", { spacingAfter: 100 }),
        h1("Appendix C. Notes for the next working session"),
        bullet("Upload full texts of the studies referenced with [verify] or [REF] above so exact citations can be confirmed and completed."),
        bullet("Confirm authorship, affiliations, and corresponding author details for the title page."),
        bullet("Decide screening software (Rayyan/Covidence) and OSF registration details before finalising Section 2."),
        bullet("Once Section 3 (Results) is populated, revisit Section 4.2 to convert extrapolation-based statements into direct-evidence statements wherever new data allow."),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/user/research-uniGE/manuscript/APS_Cancer_Anticoagulation_Manuscript_v0.1.docx", buffer);
  console.log("done");
});
