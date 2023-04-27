import express, { Request, Response } from 'express';

export const quoteRouter = express.Router();

quoteRouter.get('', async (req: Request, res: Response) => {
    const quotes = [
        {
            citation: `23 à 0 ! C'est la piquette Jack ! Tu sais pas jouer Jack ! T'es mauvais !`,
            auteur: 'Hubert Bonisseur de La Bath'
        },
        {
            citation: `C'est marrant, c'est toujours les nazis qui ont le mauvais rôle. Nous sommes en 1955, herr Bramard, on peut avoir une deuxième chance, merci.`,
            auteur: 'Hubert Bonisseur de La Bath'
        },
        {
            citation: `Rechercher un nazi avec des Juifs ? Quelle drôle d'idée...`,
            auteur: 'Hubert Bonisseur de La Bath'
        },
        {
            citation: `La joie de vivre et le jambon, y'a pas trente-six recettes du bonheur !`,
            auteur: 'Seigneur Karadoc'
        },
        {
            citation: `Moi, à une époque, je voulais faire vœu de pauvreté (...) Mais avec le pognon que j'rentrais, j'arrivais pas à concilier les deux.`,
            auteur: 'Seigneur Galessin'
        },
        {
            citation: `Au bout d'un moment, il est vraiment druide, c'mec-là, ou ça fait quinze ans qu'il me prend pour un con ?`,
            auteur: 'Le roi Arthur'
        },
        {
            citation: `Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !`,
            auteur: 'Seigneur Perceval'
        }
    ];

    const index = Math.floor(Math.random() * quotes.length);

    res.json( quotes[index] );
});
