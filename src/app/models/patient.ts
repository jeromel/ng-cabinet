export class Patient {
    id?: string;
    prenom?: string;
    nom?: string;
    dateDeNaissance?: Date;
    
    constructor( prenom: string, nom: string, dateDeNaissance: Date)
    {
        this.id = 'toto1';
        this.prenom = prenom;
        this.nom = nom;
        this.dateDeNaissance = dateDeNaissance;
    }
}