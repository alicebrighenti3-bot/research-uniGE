# PubMed (MEDLINE) Search Strategies — Salivary Gland Multiparametric Ultrasound Review

---

## MASTER QUERIES

### M1 — Master query, alta sensibilità

```
(("salivary gland*"[tiab] OR "Salivary Glands"[Mesh] OR parotid*[tiab] OR "Parotid Gland"[Mesh] OR "Parotid Neoplasms"[Mesh] OR "Parotid Diseases"[Mesh] OR submandibular*[tiab] OR "Submandibular Gland"[Mesh] OR "Submandibular Gland Diseases"[Mesh] OR "Submandibular Gland Neoplasms"[Mesh] OR sublingual*[tiab] OR "Sublingual Gland"[Mesh] OR "Sublingual Gland Diseases"[Mesh] OR "Sublingual Gland Neoplasms"[Mesh] OR "Salivary Gland Diseases"[Mesh] OR "Salivary Gland Neoplasms"[Mesh] OR "Stensen*"[tiab] OR "Wharton*"[tiab]))
AND
((ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab] OR echograph*[tiab] OR "Ultrasonography"[Mesh] OR doppler*[tiab] OR "Ultrasonography, Doppler"[Mesh] OR elastograph*[tiab] OR "Elasticity Imaging Techniques"[Mesh] OR "contrast-enhanced ultrasound"[tiab] OR "contrast enhanced ultrasound"[tiab] OR CEUS[tiab] OR "Contrast Media"[Mesh] OR "microvascular imaging"[tiab] OR SMI[tiab] OR multiparametric[tiab]))
```
Scopo: recupero massimale di tutta la letteratura, storica e recente, su ecografia (in ogni sua forma) delle ghiandole salivari maggiori e dei dotti principali.
Sensibilità attesa: molto alta.
Specificità attesa: bassa/moderata (include articoli marginalmente pertinenti, case report isolati, articoli veterinari se non esclusi).
Limiti: nessun filtro di lingua/data/tipo; da usare come pool di partenza per screening manuale, non per lettura diretta di tutti i risultati. "SMI"[tiab] può generare rumore (falsi positivi con altri acronimi) mitigato dall'AND obbligatorio con i termini ghiandolari.

### M2 — Master query, alta specificità

```
(("salivary gland*"[ti] OR parotid[ti] OR parotid gland[ti] OR submandibular[ti] OR sublingual[ti]) AND (ultrasound*[ti] OR ultrasonograph*[ti] OR sonograph*[ti] OR doppler[ti] OR elastograph*[ti] OR "contrast-enhanced ultrasound"[ti] OR CEUS[ti] OR "microvascular imaging"[ti] OR multiparametric[ti]))
```
Scopo: isolare articoli in cui sia l'organo sia la tecnica ecografica compaiono esplicitamente nel titolo — nucleo centrale della bibliografia.
Sensibilità attesa: bassa (esclude articoli pertinenti che citano organo/tecnica solo nell'abstract).
Specificità attesa: molto alta.
Limiti: perde review generali di "head and neck ultrasound" che trattano le salivari solo in una sezione, e studi con titoli generici ("A comparative diagnostic study...").

### M3 — Master query, ultimi 5 anni (2021–oggi)

```
(M1) AND ("2021/01/01"[PDAT] : "3000/12/31"[PDAT])
```
Scopo: aggiornamento quinquennale completo, per catturare l'evoluzione di SMI/MVI, elastografia quantitativa, CEUS quantitativa e primi studi AI.
Sensibilità attesa: alta (eredita quella di M1).
Specificità attesa: bassa/moderata (eredita quella di M1).
Limiti: come M1; il filtro data in PubMed usa la data di indicizzazione/pubblicazione elettronica, può includere epub-ahead-of-print con data variabile.

### M4 — Master query, ultimo biennio (2025–oggi)

```
(M1) AND ("2025/01/01"[PDAT] : "3000/12/31"[PDAT])
```
Scopo: cogliere la letteratura più recente (AI/radiomics, Milan System 2nd edition, nuove meta-analisi) per la sezione "Future Directions" e per l'aggiornamento pre-submission.
Sensibilità attesa: alta rispetto alla finestra 2025–oggi, ma volume assoluto atteso basso.
Specificità attesa: bassa/moderata.
Limiti: possibile sotto-indicizzazione di articoli epub molto recenti; ripetere la query periodicamente prima della submission.

---

## A. Anatomia normale delle ghiandole salivari

```
(("salivary gland*"[tiab] OR "Salivary Glands"[Mesh] OR parotid*[tiab] OR "Parotid Gland"[Mesh] OR submandibular*[tiab] OR "Submandibular Gland"[Mesh] OR sublingual*[tiab] OR "Sublingual Gland"[Mesh] OR "Stensen*"[tiab] OR "parotid duct"[tiab] OR "Wharton*"[tiab] OR "submandibular duct"[tiab])
AND
(anatom*[tiab] OR sonoanatom*[tiab] OR "normal variant*"[tiab] OR "anatomic variant*"[tiab] OR "anatomical variant*"[tiab] OR topograph*[tiab] OR "spatial relationship*"[tiab] OR "normal ultrasound"[tiab] OR "accessory parotid"[tiab]))
```
Scopo: anatomia normale, varianti anatomiche, rapporti spaziali, ghiandola parotide accessoria.
Sensibilità attesa: alta.
Specificità attesa: moderata (include articoli con sezioni anatomiche marginali).
Limiti: capitoli di libro e atlanti anatomici spesso non indicizzati in PubMed; molte fonti didattiche (EPOS/ECR poster) non sono recuperabili da questa query.

---

## B. Tecnica ecografica

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab] OR sublingual*[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab])
AND (technique*[tiab] OR protocol*[tiab] OR transducer*[tiab] OR frequenc*[tiab] OR "harmonic imaging"[tiab] OR artifact*[tiab] OR artefact*[tiab] OR optimization[tiab] OR optimisation[tiab] OR "scanning protocol*"[tiab] OR standardization[tiab] OR standardisation[tiab] OR positioning[tiab] OR "patient position*"[tiab] OR compression[tiab] OR "probe pressure"[tiab]))
```
Scopo: parametri tecnici di acquisizione, standardizzazione, artefatti, posizionamento, compressione.
Sensibilità attesa: alta.
Specificità attesa: moderata.
Limiti: letteratura tecnica salivare-specifica è nota per essere scarsa (vedi sezione "Missing Literature Search"); molti risultati saranno su altri organi con "salivary gland" solo citato marginalmente.

---

## C. B-mode

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("B-mode"[tiab] OR "grayscale"[tiab] OR "gray-scale"[tiab] OR "grey-scale"[tiab] OR "conventional ultrasound"[tiab] OR echogenicit*[tiab] OR echotextur*[tiab] OR "focal lesion*"[tiab] OR "diffuse disease"[tiab] OR morpholog*[tiab] OR "Ultrasonography"[Mesh]))
```
Scopo: caratterizzazione morfologica convenzionale in scala di grigi.
Sensibilità attesa: alta.
Specificità attesa: moderata (termine molto generico, alto overlap con quasi tutta la letteratura ecografica dell'organo).
Limiti: da combinare con filtri di sottotopico (margini, cisti, calcificazioni) se il volume di risultati è eccessivo.

---

## D. Color Doppler / Power Doppler

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("color Doppler"[tiab] OR "colour Doppler"[tiab] OR "power Doppler"[tiab] OR "spectral Doppler"[tiab] OR "Ultrasonography, Doppler"[Mesh] OR "Ultrasonography, Doppler, Color"[Mesh] OR vascularit*[tiab] OR "vascular pattern*"[tiab] OR "resistive index"[tiab] OR "pulsatility index"[tiab] OR "peak systolic velocity"[tiab] OR "Doppler parameter*"[tiab]))
```
Scopo: pattern vascolare qualitativo/semiquantitativo, indici spettrali (RI, PI, PSV).
Sensibilità attesa: alta.
Specificità attesa: moderata-alta.
Limiti: RI/PI/PSV sono termini generici usati in molti altri organi; l'AND con i termini ghiandolari è indispensabile.

---

## E. Microvascular Imaging (tutte le denominazioni commerciali/generiche)

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("microvascular imaging"[tiab] OR "Superb Microvascular Imaging"[tiab] OR SMI[tiab] OR "Microvascular Imaging"[tiab] OR MVI[tiab] OR "MicroFlow Imaging"[tiab] OR "Micro Flow Imaging"[tiab] OR MVFI[tiab] OR "Microvascular Flow Imaging"[tiab] OR "slow-flow imaging"[tiab] OR "slow flow imaging"[tiab] OR "slow-flow Doppler"[tiab] OR "slow Doppler"[tiab] OR "advanced Doppler"[tiab] OR "UltraMicroAngiography"[tiab] OR "AngioPLUS"[tiab] OR "MV-Flow"[tiab] OR "MicroV"[tiab] OR "MicroV Imaging"[tiab] OR "Fine Flow"[tiab] OR "slow flow detection"[tiab] OR "ultra-sensitive Doppler"[tiab] OR "ultrasensitive Doppler"[tiab] OR "ultra-sensitive vascular imaging"[tiab] OR "power Doppler enhancement"[tiab]))
```
Scopo: recupero di tutte le implementazioni proprietarie/generiche di imaging microvascolare slow-flow applicate all'organo, senza assumerne l'equivalenza tecnica.
Sensibilità attesa: alta per SMI (dominante in letteratura); bassa per i termini vendor-alternativi (MV-Flow, MicroV, AngioPLUS, UltraMicroAngiography, Fine Flow) — atteso pochi o zero risultati salivary-specific, da confermare come gap reale.
Specificità attesa: moderata (SMI/MVI come acronimi isolati generano rumore fuori dall'AND obbligatorio).
Limiti: alcuni nomi commerciali possono comparire solo nel full text/metodi e non in title/abstract, sfuggendo alla query [tiab]; considerare ricerca supplementare senza restrizione di campo se il volume è basso.

---

## F. Elastografia

### F1 — Strain elastography / Real-time elastography

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("strain elastography"[tiab] OR "real-time elastography"[tiab] OR RTE[tiab] OR "strain ratio"[tiab] OR "elasticity score"[tiab] OR "elasticity index"[tiab] OR "Elasticity Imaging Techniques"[Mesh]))
```
Scopo: elastografia compressiva/strain, punteggio di elasticità, strain ratio.
Sensibilità attesa: alta.
Specificità attesa: alta.
Limiti: RTE è un acronimo ambiguo (usato anche per "radiotherapy-related edema" in alcuni contesti) — verificare manualmente i falsi positivi.

### F2 — Shear Wave Elastography

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("shear wave elastography"[tiab] OR "shear-wave elastography"[tiab] OR SWE[tiab] OR "point shear wave"[tiab] OR pSWE[tiab] OR "2D-SWE"[tiab] OR "2D SWE"[tiab] OR ARFI[tiab] OR "acoustic radiation force impulse"[tiab] OR "Virtual Touch"[tiab] OR "shear wave velocity"[tiab] OR stiffness[tiab] OR kilopascal*[tiab] OR kPa[tiab] OR "Young's modulus"[tiab]))
```
Scopo: SWE 2D e point-SWE, velocità dell'onda di taglio, stiffness quantitativa.
Sensibilità attesa: alta.
Specificità attesa: alta.
Limiti: "stiffness"[tiab] e "kPa"[tiab] da soli sono molto generici — mitigato dall'AND obbligatorio con l'organo; ARFI è talvolta usato come sinonimo generico di SWE e talvolta come tecnica point-specific, verificare manualmente.

---

## G. CEUS

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("contrast-enhanced ultrasound"[tiab] OR "contrast enhanced ultrasound"[tiab] OR "contrast-enhanced ultrasonography"[tiab] OR CEUS[tiab] OR "Contrast Media"[Mesh] OR microbubble*[tiab] OR SonoVue[tiab] OR Lumason[tiab] OR "perfusion imaging"[tiab] OR "time-intensity curve*"[tiab] OR "time intensity curve*"[tiab] OR "wash-in"[tiab] OR washin[tiab] OR "wash-out"[tiab] OR washout[tiab] OR "peak intensity"[tiab] OR "time to peak"[tiab] OR "area under the curve"[tiab] OR "arrival time"[tiab] OR "mean transit time"[tiab] OR "quantitative CEUS"[tiab] OR "dynamic CEUS"[tiab]))
```
Scopo: CEUS qualitativa e quantitativa, parametri delle curve tempo-intensità.
Sensibilità attesa: alta.
Specificità attesa: alta.
Limiti: "area under the curve"[tiab] è un termine statistico generico ad altissimo overlap con studi di accuratezza diagnostica non-CEUS — mitigato dall'AND obbligatorio, ma controllare comunque manualmente i risultati marginali.

---

## H. Ecografia multiparametrica

### H1 — Terminologia esplicita

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("multiparametric ultrasound"[tiab] OR "multi-parametric ultrasound"[tiab] OR "multimodal ultrasound"[tiab] OR "multi-modal ultrasound"[tiab] OR "integrated ultrasound"[tiab] OR "diagnostic algorithm*"[tiab] OR "diagnostic workflow*"[tiab] OR "diagnostic pathway*"[tiab])
```
Scopo: articoli che usano esplicitamente la dicitura "multiparametrico/multimodale".
Sensibilità attesa: moderata (dipende dall'adozione terminologica dell'autore).
Specificità attesa: molto alta.
Limiti: non cattura studi che di fatto combinano più tecniche senza usare il termine "multiparametric".

### H2 — Combinazione implicita di tecniche (senza il termine esplicito)

```
("salivary gland*"[tiab] OR parotid*[tiab])
AND (("B-mode"[tiab] OR grayscale[tiab] OR "gray-scale"[tiab])
AND (doppler[tiab] OR SMI[tiab] OR MVI[tiab] OR "microvascular imaging"[tiab])
AND (elastograph*[tiab] OR SWE[tiab] OR "shear wave"[tiab])
AND (CEUS[tiab] OR "contrast-enhanced"[tiab] OR "contrast enhanced"[tiab]))
```
Scopo: recuperare studi che combinano di fatto ≥4 domini ecografici anche senza dichiararsi "multiparametrici".
Sensibilità attesa: bassa (richiede compresenza di 4 categorie di termini in title/abstract, molto restrittivo).
Specificità attesa: molto alta.
Limiti: esclude studi che combinano solo 2-3 tecniche o che descrivono la combinazione solo nei Methods del full text, non nell'abstract.

---

## I. Patologie infiammatorie e ostruttive

```
(("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab] OR "Sialadenitis"[Mesh])
AND (sialadenitis[tiab] OR "acute sialadenitis"[tiab] OR "chronic sialadenitis"[tiab] OR "recurrent sialadenitis"[tiab] OR "obstructive sialadenitis"[tiab] OR "juvenile recurrent parotitis"[tiab] OR sialolithiasis[tiab] OR "Sialolithiasis"[Mesh] OR "Salivary Gland Calculi"[Mesh] OR "salivary stone*"[tiab] OR "salivary calculi"[tiab] OR "duct obstruction"[tiab] OR "ductal obstruction"[tiab] OR "duct stenosis"[tiab] OR "ductal stenosis"[tiab] OR abscess*[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab]))
```
Scopo: sialoadeniti acute/croniche/ricorrenti, sialolitiasi, stenosi duttale, ascesso.
Sensibilità attesa: alta.
Specificità attesa: alta.
Limiti: "Sialolithiasis"[Mesh] potrebbe non esistere come heading autonomo in tutte le versioni MeSH — la clausola "Salivary Gland Calculi"[Mesh] copre l'alternativa; verificare nel MeSH database quale sia corrente.

---

## J. Patologie autoimmuni e sistemiche

### J1 — Sjögren

```
("Sjogren's Syndrome"[Mesh] OR "Sjögren syndrome"[tiab] OR "Sjogren syndrome"[tiab] OR "Sjögren's syndrome"[tiab] OR "primary Sjogren*"[tiab] OR "secondary Sjogren*"[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab] OR OMERACT[tiab] OR "salivary gland ultrasonography"[tiab] OR "scoring system*"[tiab])
```
Scopo: SGUS in Sjögren, sistema di scoring OMERACT, correlazioni clinico-sierologiche.
Sensibilità attesa: alta.
Specificità attesa: alta.
Limiti: nessuno rilevante.

### J2 — IgG4-RD, sarcoidosi, HIV

```
(("IgG4-related disease"[tiab] OR "IgG4 related disease"[tiab] OR "Immunoglobulin G4-Related Disease"[Mesh] OR "Mikulicz*"[tiab] OR "Kuttner tumor*"[tiab] OR "Küttner tumor*"[tiab] OR sarcoidosis[tiab] OR "Sarcoidosis"[Mesh] OR HIV[tiab] OR "human immunodeficiency virus"[tiab])
AND ("salivary gland*"[tiab] OR parotid*[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab]))
```
Scopo: sialoadenite IgG4-correlata (Mikulicz/Küttner), sarcoidosi, malattia HIV-correlata delle ghiandole salivari.
Sensibilità attesa: moderata-alta.
Specificità attesa: alta.
Limiti: letteratura attesa scarsa per sarcoidosi e HIV (vedi "Missing Literature Search").

---

## K. Tumori benigni

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("pleomorphic adenoma"[tiab] OR "Adenoma, Pleomorphic"[Mesh] OR "Warthin tumor*"[tiab] OR "Warthin's tumor*"[tiab] OR "Adenolymphoma"[Mesh] OR "cystadenolymphoma"[tiab] OR "basal cell adenoma"[tiab] OR oncocytoma[tiab] OR lipoma[tiab] OR cyst*[tiab] OR "lymphoepithelial lesion*"[tiab] OR "lymphoepithelial cyst*"[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab])
```
Scopo: caratterizzazione mpUS di adenoma pleomorfo, tumore di Warthin, oncocitoma, adenoma a cellule basali, lipoma, cisti, lesioni linfoepiteliali.
Sensibilità attesa: alta.
Specificità attesa: alta.
Limiti: "cyst*"[tiab] molto generico — considerare restrizione a "salivary cyst*"[tiab] se il rumore è eccessivo.

---

## L. Tumori maligni

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("mucoepidermoid carcinoma"[tiab] OR "Carcinoma, Mucoepidermoid"[Mesh] OR "adenoid cystic carcinoma"[tiab] OR "Carcinoma, Adenoid Cystic"[Mesh] OR "acinic cell carcinoma"[tiab] OR "Carcinoma, Acinar Cell"[Mesh] OR "salivary duct carcinoma"[tiab] OR "carcinoma ex pleomorphic adenoma"[tiab] OR lymphoma[tiab] OR "Lymphoma"[Mesh] OR metasta*[tiab] OR "Lymphatic Metastasis"[Mesh] OR "high-grade"[tiab] OR "low-grade"[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab])
```
Scopo: caratterizzazione mpUS di carcinoma mucoepidermoide, adenoido-cistico, a cellule acinari, duttale, carcinoma ex-adenoma pleomorfo, linfoma, metastasi.
Sensibilità attesa: alta.
Specificità attesa: alta.
Limiti: atteso volume molto basso per query istotipo-specifiche combinate con "ultrasound" (gap di letteratura già documentato); "high-grade"/"low-grade"[tiab] generano rumore elevato, da usare solo come termini accessori, non come clausola isolata.

---

## M. Linfonodi

```
(("intraparotid lymph node*"[tiab] OR "periparotid lymph node*"[tiab] OR "cervical lymph node*"[tiab] OR "Lymph Nodes"[Mesh])
AND ("salivary gland*"[tiab] OR parotid*[tiab]))
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab] OR "contrast-enhanced ultrasound"[tiab] OR elastograph*[tiab] OR SMI[tiab] OR "microvascular imaging"[tiab])
AND (metastatic[tiab] OR reactive[tiab] OR benign[tiab] OR malignant[tiab] OR hilum[tiab])
```
Scopo: caratterizzazione ecografica multiparametrica dei linfonodi intra/periparotidei.
Sensibilità attesa: moderata.
Specificità attesa: alta.
Limiti: la maggior parte della letteratura sui criteri linfonodali è generica (cervicale, non salivare-specifica) — atteso overlap forte con letteratura tiroidea/oncologica cervicale generale, da filtrare manualmente.

---

## N. Interventistica

### N1 — FNA

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("fine needle aspiration"[tiab] OR FNAC[tiab] OR FNA[tiab] OR "Biopsy, Fine-Needle"[Mesh] OR "fine-needle aspiration cytology"[tiab])
```
Scopo: FNA ecoguidata, resa diagnostica, accuratezza.
Sensibilità attesa: alta. Specificità attesa: alta.
Limiti: nessuno rilevante.

### N2 — Core Needle Biopsy

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("core needle biopsy"[tiab] OR CNB[tiab] OR "Biopsy, Large-Core Needle"[Mesh] OR "core biopsy"[tiab])
```
Scopo: CNB ecoguidata, resa diagnostica, complicanze.
Sensibilità attesa: alta. Specificità attesa: alta.
Limiti: "CNB"[tiab] è un acronimo ambiguo in altri contesti (es. "central neurogenic bladder") — mitigato dall'AND obbligatorio.

### N3 — Guida ecografica generica / drenaggio

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND ("ultrasound-guided biopsy"[tiab] OR "ultrasound-guided intervention*"[tiab] OR "image-guided biopsy"[tiab] OR "Image-Guided Biopsy"[Mesh] OR drainage[tiab] OR "needle aspiration"[tiab] OR abscess[tiab])
```
Scopo: drenaggio ecoguidato di ascessi/raccolte, aspirazione di cisti.
Sensibilità attesa: alta. Specificità attesa: moderata.
Limiti: "drainage"[tiab] è generico, alto overlap con letteratura chirurgica non ecografica.

### N4 — Tecniche ablative

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab] OR "Warthin tumor*"[tiab] OR "pleomorphic adenoma"[tiab])
AND ("radiofrequency ablation"[tiab] OR "Radiofrequency Ablation"[Mesh] OR "microwave ablation"[tiab] OR "laser ablation"[tiab] OR "ethanol ablation"[tiab] OR "ethanol sclerotherapy"[tiab] OR "thermal ablation"[tiab] OR "high intensity focused ultrasound"[tiab] OR "high-intensity focused ultrasound"[tiab] OR HIFU[tiab] OR "High-Intensity Focused Ultrasound Ablation"[Mesh])
```
Scopo: RFA, MWA, ablazione laser, sclerosi etanolica, HIFU per lesioni salivari.
Sensibilità attesa: alta per RFA/MWA/etanolo; attesa nulla o quasi nulla per laser/HIFU salivare-specifici (gap atteso, da confermare non da presumere).
Specificità attesa: alta.
Limiti: nessuno oltre al volume atteso molto basso per alcune sottotecniche.

### N5 — Milan System e ROSE

```
("salivary gland*"[tiab] OR parotid*[tiab])
AND ("Milan System"[tiab] OR "Milan System for Reporting Salivary Gland Cytopathology"[tiab] OR "rapid on-site evaluation"[tiab] OR ROSE[tiab])
```
Scopo: sistema Milan di refertazione citologica, valutazione rapida on-site.
Sensibilità attesa: alta per Milan System; bassa per ROSE salivare-specifico (gap atteso).
Specificità attesa: alta.
Limiti: "ROSE"[tiab] genera falsi positivi (nome proprio, acronimo di trial) — verificare manualmente ogni risultato.

---

## O. Diagnosi differenziale, accuratezza diagnostica, AI e radiomica

### O1 — Diagnosi differenziale / accuratezza

```
("salivary gland*"[tiab] OR parotid*[tiab])
AND ("benign versus malignant"[tiab] OR "benign vs malignant"[tiab] OR "differential diagnosis"[tiab] OR "diagnostic accuracy"[tiab] OR sensitivity[tiab] OR specificity[tiab] OR "ROC curve"[tiab] OR "receiver operating characteristic"[tiab] OR "prediction model*"[tiab])
```
Scopo: studi di accuratezza diagnostica benigno/maligno.
Sensibilità attesa: alta. Specificità attesa: moderata (termini molto generici come "sensitivity"/"specificity").
Limiti: alto volume atteso, necessario screening manuale esteso.

### O2 — AI e radiomica

```
("salivary gland*"[tiab] OR parotid*[tiab])
AND ("machine learning"[tiab] OR "Machine Learning"[Mesh] OR "artificial intelligence"[tiab] OR "Artificial Intelligence"[Mesh] OR "deep learning"[tiab] OR "Deep Learning"[Mesh] OR radiomics[tiab] OR "ultrasound radiomics"[tiab] OR "CEUS radiomics"[tiab] OR "elastography radiomics"[tiab] OR "neural network*"[tiab] OR "convolutional neural network*"[tiab])
```
Scopo: modelli di intelligenza artificiale, deep learning, radiomica su ecografia salivare.
Sensibilità attesa: alta. Specificità attesa: alta.
Limiti: letteratura attesa recente e in rapida crescita — ripetere periodicamente prima della submission (vedi M4).

---

## P. Linee guida e Consensus

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab] OR sublingual*[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab])
AND (guideline*[tiab] OR "Practice Guideline"[Publication Type] OR "Guideline"[Publication Type] OR consensus[tiab] OR "Consensus"[Mesh] OR "position paper"[tiab] OR "position statement"[tiab] OR recommendation*[tiab] OR EFSUMB[tiab] OR WFUMB[tiab] OR AIUM[tiab] OR "European Society of Radiology"[tiab] OR ESR[tiab] OR ESHNR[tiab] OR "Head and Neck Society"[tiab] OR "ultrasound society"[tiab])
```
Scopo: linee guida e consensus statement di società scientifiche (EFSUMB, WFUMB, AIUM, ESR, ESHNR).
Sensibilità attesa: alta. Specificità attesa: alta.
Limiti: molti documenti di società (course book EFSUMB, training recommendations) sono pubblicati come capitoli online o su siti societari e non indicizzati in PubMed — integrare con ricerca diretta sui siti delle società, dove accessibile.

---

## Q. Revisioni sistematiche e meta-analisi

### Q1 — Query testuale ampia

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab])
AND ("systematic review"[tiab] OR "Systematic Review"[Publication Type] OR "meta-analysis"[tiab] OR "Meta-Analysis"[Publication Type] OR "umbrella review"[tiab] OR "scoping review"[tiab] OR "narrative review"[tiab] OR "diagnostic accuracy review"[tiab] OR "network meta-analysis"[tiab])
```
Scopo: recupero testuale ampio di ogni tipologia di revisione.
Sensibilità attesa: alta. Specificità attesa: moderata-alta.
Limiti: "narrative review"[tiab] è spesso assente dal titolo/abstract anche quando l'articolo lo è nella sostanza — sensibilità reale inferiore a quella nominale per questa sottocategoria.

### Q2 — Query per tipo di pubblicazione indicizzato (massima precisione)

```
("salivary gland*"[tiab] OR parotid*[tiab] OR submandibular*[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab])
AND ("Systematic Review"[Publication Type] OR "Meta-Analysis"[Publication Type])
```
Scopo: revisioni sistematiche/meta-analisi correttamente classificate da PubMed come tipo di pubblicazione.
Sensibilità attesa: moderata (dipende dalla corretta classificazione editoriale, non sempre applicata).
Specificità attesa: molto alta.
Limiti: esclude systematic review non taggate come tali dall'editore/indicizzatore.

---

## MISSING LITERATURE SEARCH

Argomenti a rischio di scarsa indicizzazione, con query alternative allargate a sinonimi, termini storici e formulazioni meno comuni.

### MISS1 — Tecnica di compressione e posizionamento (atteso gap reale)

```
("salivary gland*"[tiab] OR parotid*[tiab])
AND (compression[tiab] OR "probe pressure"[tiab] OR "transducer pressure"[tiab] OR positioning[tiab] OR "patient position*"[tiab] OR "scanning position*"[tiab] OR "examination technique"[tiab])
```
Limiti attesi: volume molto basso; se nullo, conferma il gap già documentato nella review.

### MISS2a — Calibro duttale su ecografia (escludendo sialografia)

```
(("Stensen*"[tiab] OR "parotid duct"[tiab] OR "Wharton*"[tiab] OR "submandibular duct"[tiab])
AND (diameter[tiab] OR caliber[tiab] OR calibre[tiab] OR width[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR sonograph*[tiab]))
NOT (sialograph*[tiab] OR "Sialography"[Mesh])
```
Limiti attesi: volume atteso molto basso o nullo — usata per confermare che i dati normativi di calibro duttale sono quasi esclusivamente sialografici, non ecografici.

### MISS2b — Calibro duttale, baseline storico sialografico (per confronto esplicito nel testo)

```
(("Stensen*"[tiab] OR "Wharton*"[tiab] OR "parotid duct"[tiab] OR "submandibular duct"[tiab])
AND (diameter[tiab] OR caliber[tiab] OR calibre[tiab])
AND (sialograph*[tiab] OR "Sialography"[Mesh] OR morphometr*[tiab] OR cadaver*[tiab]))
```
Scopo: recuperare i dati storici sialografici/cadaverici citati nella review come contrappunto esplicito alla mancanza di dati US-specifici.

### MISS3 — Segni ecografici istotipo-specifici nei tumori maligni

```
(("mucoepidermoid"[tiab] OR "adenoid cystic"[tiab] OR "acinic cell"[tiab] OR "salivary duct carcinoma"[tiab])
AND ("sonographic feature*"[tiab] OR "ultrasound feature*"[tiab] OR "ultrasonographic finding*"[tiab] OR "gray-scale feature*"[tiab] OR "grayscale finding*"[tiab] OR "imaging feature*"[tiab]))
```
Limiti attesi: volume molto basso — atteso a conferma del gap già documentato (assenza di firme ecografiche istotipo-specifiche).

### MISS4 — ROSE per FNA salivare

```
("rapid on-site evaluation"[tiab] OR ROSE[tiab] OR "on-site cytopathology"[tiab] OR "on-site cytology"[tiab] OR "on-site evaluation"[tiab])
AND ("salivary gland*"[tiab] OR parotid*[tiab] OR "fine needle aspiration"[tiab] OR FNA[tiab])
```
Limiti attesi: volume atteso molto basso; se nullo, conferma gap.

### MISS5 — CEUS/Doppler per guida bioptica (target selection)

```
("salivary gland*"[tiab] OR parotid*[tiab])
AND ("CEUS-guided"[tiab] OR "contrast-enhanced ultrasound-guided"[tiab] OR "viable tumor"[tiab] OR "necrosis avoidance"[tiab] OR "biopsy target selection"[tiab] OR "vessel avoidance"[tiab])
```
Limiti attesi: volume atteso nullo o quasi nullo per l'organo specifico; considerare allargamento a "mediastinal"[tiab] OR "hepatic"[tiab] OR "pulmonary"[tiab] per letteratura analoga extra-organo, da citare come evidenza per estrapolazione, non diretta.

### MISS6 — Laser ablation / HIFU (allargato a head and neck generico)

```
(("laser ablation"[tiab] OR HIFU[tiab] OR "high intensity focused ultrasound"[tiab] OR "high-intensity focused ultrasound"[tiab])
AND ("head and neck"[tiab] OR "salivary gland*"[tiab] OR parotid*[tiab] OR "benign tumor*"[tiab] OR "benign tumour*"[tiab]))
```
Scopo: verificare l'assenza totale (o quasi) di letteratura salivare-specifica su queste due tecniche, allargando prima al contesto testa-collo generico.

### MISS7 — Prevalenza ghiandola parotide accessoria (dati discordanti da riconciliare)

```
("accessory parotid gland*"[tiab] OR "accessory parotid tissue"[tiab] OR "accessory parotid lobe*"[tiab])
AND (prevalence[tiab] OR incidence[tiab] OR anatom*[tiab] OR cadaver*[tiab])
```
Scopo: riconciliare le cifre di prevalenza discordanti (cadaveriche vs. CT vs. cliniche) già segnalate come inconsistenti nella review.

### MISS8 — Sarcoidosi salivare, scoring validato (atteso gap)

```
("sarcoidosis"[Mesh] OR sarcoidosis[tiab] OR granulomatous[tiab])
AND ("salivary gland*"[tiab] OR parotid*[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab] OR "scoring system*"[tiab])
```

### MISS9 — HIV-correlata, coorte moderna post-HAART

```
(HIV[tiab] OR "human immunodeficiency virus"[tiab] OR "antiretroviral therapy"[tiab] OR HAART[tiab] OR "combination antiretroviral therapy"[tiab])
AND ("salivary gland*"[tiab] OR parotid*[tiab] OR "lymphoepithelial cyst*"[tiab] OR "diffuse infiltrative lymphocytosis"[tiab])
AND (ultrasound*[tiab] OR ultrasonograph*[tiab])
```
Limiti attesi: atteso prevalere di letteratura pre-2010; verificare se esistono coorti moderne post-terapia antiretrovirale combinata.

### MISS10 — Tecnologie MVI oltre SMI, applicate a organi limitrofi (per contesto)

```
("MicroFlow Imaging"[tiab] OR "MV-Flow"[tiab] OR "MicroV"[tiab] OR "AngioPLUS"[tiab] OR "UltraMicroAngiography"[tiab])
AND ("head and neck"[tiab] OR thyroid[tiab] OR "lymph node*"[tiab] OR parotid*[tiab] OR "salivary gland*"[tiab])
```
Scopo: verificare se tecnologie MVI alternative a SMI sono almeno state validate in organi limitrofi (tiroide, linfonodi), anche quando assenti per le ghiandole salivari — utile per l'inquadramento del gap nella review.

---

## Nota metodologica

I termini MeSH sopra riportati sono stati costruiti sulla base della nomenclatura MeSH nota fino all'ultimo aggiornamento di addestramento e non sono stati verificati in tempo reale sul database MeSH (accesso a PubMed non disponibile in questo ambiente). Prima dell'uso, confermare ogni singolo heading tramite il MeSH Database di PubMed (https://www.ncbi.nlm.nih.gov/mesh), poiché alcuni termini (in particolare "Sialolithiasis"[Mesh] vs "Salivary Gland Calculi"[Mesh]) potrebbero essere stati modificati, fusi o sostituiti in aggiornamenti successivi.
