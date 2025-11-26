# Application de Gestion du Personnel

## Fonctionnalités Principales

### 1. Gestion Interactive du Personnel
- **Ajout/Modification/Suppression** :  
  Ajouter de nouveaux employés via une modale complète, les déplacer sur le plan, ou les retirer de leur poste (bouton "X") pour les replacer dans la liste "Unassigned Staff".  

- **Modale d'Ajout d'Employé** :  
  Formulaire incluant Nom, Rôle, Photo (URL), Email, Téléphone et un champ dynamique pour les Expériences Professionnelles.  

- **Validation Avancée** :  
  Le formulaire est validé par REGEX et vérifie la logique des dates d'expérience (date de début < date de fin).  

- **Prévisualisation** :  
  Affichage immédiat de la photo (URL) renseignée.  

- **Affectation** :  
  Utilisation d'un bouton "+" dans chaque zone pour sélectionner un employé éligible parmi la liste des non-assignés.  

### 2. Plan d'Étage et Zones
L'application affiche le plan d'étage du bâtiment, divisé en 6 zones distinctes :  
- Salle de conférence  
- Réception  
- Salle des serveurs  
- Salle de sécurité  
- Salle du personnel  
- Salle d’archives  

### 3. Logique de Restrictions d'Accès
Des règles métier strictes régissent l'affectation des employés aux zones :  

| Zone | Rôles Autorisés |
|------|----------------|
| Réception | Réceptionnistes uniquement |
| Salle des serveurs | Techniciens IT uniquement |
| Salle de sécurité | Agents de sécurité uniquement |
| Manager | Accès à toutes les zones |
| Nettoyage | Accès libre sauf à la Salle d’archives |
| Autres Rôles | Accès libre sauf aux zones restreintes ci-dessus |

- **Général** : Les zones comme Salle de conférence et Salle du personnel sont accessibles à tous (non obligatoires).  
- **Indicateur Visuel** : Les zones obligatoires vides (Réception, Serveurs, Sécurité, Archives) apparaissent en rouge pâle pour signaler un besoin d'affectation.  
- **Limitation de Capacité** : Chaque zone intègre une limitation du nombre d'employés qu'elle peut accueillir.  

## Stack Technique (Front-End)

| Composant | Technologie/Méthode | Notes |
|-----------|--------------------|-------|
| Structure | HTML5  | Sémantique et accessible. |
| Mise en page | CSS3  | Utilisation de Flexbox et Grid pour une structure robuste. |
| Design/UX | Design moderne et responsive (formes arrondies, boutons colorés : vert, orange, rouge) | Palette de couleurs cohérente et icônes intuitives. |
| Responsivité | Media Queries avancées | Gestion complète des 4 tailles d'écrans Portrait et 2 tailles Paysage. |
| Interaction | JavaScript | Logique métier (règles de placement, validation de formulaire) et animations fluides. |
| Déploiement | GitHub Pages ou Vercel | Mise en ligne facile pour la démonstration. |

### Gestion des Tailles d'Écrans (Responsive Design)

| Orientation | Plage de Largeur | Type d'Écran |
|-------------|-----------------|-------------|
| Portrait | Jusqu'à 767px | Mobile |
| Portrait | 768px - 1023px | Tablette |
| Portrait | 1024px - 1279px | Petit écran d'ordinateur ||
| Paysage | 768px - 1023px | Mobile (large) |
| Paysage | 1024px - 1279px | Tablette (large) |

## Organisation du Projet (Scrum Master)
En tant que Scrum Master, les tâches sont organisées pour assurer une progression claire et un suivi efficace :  

- **Outil de Gestion** : Utilisation de Trello, GitHub Projects pour la gestion des User Stories, le suivi de l'avancement, et l'attribution des tâches.  
- **Livraison** : Le projet final sera présenté sous forme de démonstration exhaustive de toutes les fonctionnalités dynamiques, validant chaque User Story.  
