var citations = document.querySelector("#citation");
var auteur = document.querySelector("#auteur");
var button = document.querySelector("button");



var citations = [

	{
        "citation": " La voie de la vérité est un travail de cœur, pas de la tête. Faites de votre cœur votre principal guide ! Pas votre esprit. Affrontez, défiez et dépassez votre nafs avec votre cœur Connaitre votre ego vous conduira à la connaissance de Dieu.",
        "auteur": "Sham's De Tabriz"
    },
    {
        "citation": "Le bonheur ne s'acquiert pas, il ne réside pas dans les apparences, chacun d'entre nous le construit à chaque instant de sa vie avec son coeur.",
        "auteur": "Proverbe Africain"
    },
    {
        "citation": "Ne te demande pas ou la route va te conduire. Concentre-toi sur le premier pas. C’est le plus difficile à faire.",
        "auteur": "Sham's De Tabriz"
    },
    {
        "citation": "Ca ne sera pas toujours comme ça;Ca ira",
        "auteur": "Lyra McKee"
    },
    {
        "citation": "L’être humain occupe une place unique dans la création de DIEU. « J’ai insufflé Mon esprit en lui », dit DIEU. Chacun d’entre nous sans exception est conçu pour être l’envoyé de DIEU sur terre. Demandez-vous combien de fois vous vous comportez comme un envoyé, si cela vous arrive jamais ? Souvenez-vous qu’il incombe à chacun de nous de découvrir l’esprit divin en nous et de vivre par lui.",
        "auteur": "Sham's De Tabriz"
    },
    {
        "citation": "Nous devons nous y habituer:aux plus importantes croisées des chemins de nos vies,il n'y a pas de signalisations",
        "auteur": "Ernest Hemingway"
    },
    {
        "citation": "Alors que les parties changent, l’ensemble reste toujours identique. Pour chaque voleur qui quitte ce monde, un autre naît. Et chaque personne honnête qui s’éteint est remplacé par une autre. De cette manière, non seulement rien ne reste identique, mais rien ne change vraiment. Pour chaque Soufi qui meurt, un autre naît, quelque part.",
        "auteur": "Sham's De Tabriz"
    },
    {
        "citation": "Tout seul on va plus vite, ensemble, on va plus loin",
        "auteur": "Proverbe Africain"
    },
	{
        "citation": "L’esseulement et la solitude sont deux choses différentes Quand on est esseulé, il est facile de croire qu’on est sur la bonne voie La solitude est meilleure pour nous, car elle signifie être seul sans se sentir esseulé Mais en fin de compte, le mieux est de trouver une personne, la personne qui sera votre miroir N’oubliez pas que ce n’est que dans le cœur d’une autre personne qu’on peut réellement se trouver et trouver la présence de DIEU en soi.",
        "auteur": "Sham's De Tabriz"
    },
    {
        "citation": "Le corps humain est un royaume où chaque organe veut être le roi ; il y a chez l'homme 3 leaders qui essayent d'imposer leur loi, cette lutte permanente est la plus grosse source d'embrouille, elle oppose depuis toujours la tête, le coeur et les couilles.",
        "auteur": "Grand-corps Malade"
    },
    {
        "citation": "Parfois, toucher le fond donne beaucoup d’ardeur à vivre, à aimer, à donner, à méditer et surtout à choisir de ne plus être un consommateur de la vie mais un cultivateur du bonheur.",
        "auteur": "Diam's"
    },
    {
        "citation": "Seul un idiot mesure la profondeur de l'eau avec ses pieds",
        "auteur": "Proverbe Africain"
    },
    {
        "citation": "Parfois, toucher le fond donne beaucoup d’ardeur à vivre, à aimer, à donner, à méditer et surtout à choisir de ne plus être un consommateur de la vie mais un cultivateur du bonheur.",
        "auteur": "Diam's"
    },
    {
        "citation": "Seul un idiot mesure la profondeur de l'eau avec ses pieds",
        "auteur": "Proverbe Africain"
    },
    {
        "citation": "La femme ne doit pas être l’accessoire qui orne. L’objet que l’on déplace, la compagne qu’on flatte ou calme avec des promesses. La femme est la racine première, fondamentale de la nation où se greffe tout apport, d’où part aussi toute floraison. Il faut inciter la femme à s’intéresser davantage au sort de son pays.",
        "auteur": "Mariama Ba"
    },
    {
        "citation": "L’enfer est dans l’ici et maintenant. De même que le ciel. Cesse de t’inquiéter de l’enfer ou de rêver du ciel, car ils sont tous deux présents dans cet instant précis. Chaque fois que nous tombons amoureux, nous montons au ciel. Chaque fois que nous haïssons, que nous envions ou que nous battons quelqu’un, nous tombons tout droit dans le feu de l’enfer.",
        "auteur": "Sham's De Tabriz"
    },
    {
        "citation": "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",
        "auteur": "Nelson Mandela"
    },
    {
        "citation": "Deux choses sont infinies : l'Univers et la bêtise humaine. Mais en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue.",
        "auteur": "Albert Einstein"
    },
    {
        "citation": "A la fin, nous ne nous rappelleront pas les mots de nos ennemis, mais le silence de nos amis.",
        "auteur": "Martin Luther King"
    },
    {
        "citation": "Le temps de lire, comme le temps d'aimer, dilate le temps de vivre",
        "auteur": "Daniel Pennac"
    },
    {
        "citation": "Dans ce monde où tu grandis et voyages, il ne faut rien prendre pour argent comptant. Souvent, beaucoup de choses se cachent derrière l’apparence des choses. Un décor a toujours son envers, n’oublie jamais cela.",
        "auteur": "Emmanuel Dongala"
    },
    {
        "citation": "Jusque-là, comme tous les opprimés, il savait ce que voulait dire ne pas être libre, mais il ne savait pas ce qu'était la liberté. Ne pas être libre était quelque chose de physique que l'on ressentait en soi, dans sa chair. La liberté se définissait en creux.",
        "auteur": "Emmanuel Dongala"
    },    
    {
        "citation": "Celui qui ne connaît pas l'histoire est condamné à la revivre.",
        "auteur": "Karl Marx"
    },
    {
        "citation": "À vaincre sans péril, on triomphe sans gloire.",
        "auteur": "Pierre Corneille "
    },
    {
        "citation": "Pas besoin de gril : l'enfer, c'est les Autres.",
        "auteur": "Jean-Paul Sartre"
    },
    {
        "citation": "A l'état de nature, l'homme est un loup pour l'homme.",
        "auteur": "John Adams"
    },
    {
        "citation": "Tout vrai regard est un désir.",
        "auteur": "Alfred De Musset"
    },
    {
        "citation": "Si la liberté d'expression nous est enlevée alors, muets et silencieux, nous pourrons être conduits à l'abattoir comme des brebis.",
        "auteur": "George Washington"
    },
    {
        "citation": "Il est impossible d'aimer une seconde fois ce qu'on a véritablement cessé d'aimer.",
        "auteur": "François de La Rochefoucauld"
    },
    {
        "citation": "C'est un affreux malheur de n'être pas aimé quand on aime ; mais c'en est un bien grand d'être aimé avec passion quand on n'aime plus.",
        "auteur": "Benjamin Constant"
    },
    {
        "citation": "Que celui qui n'a pas traversé ne se moque pas de celui qui s'est noyé",
        "auteur": "Proverbe Africain"
    },
    {
        "citation": " Quiconque taquine un nid de guêpe doit savoir courir.",
        "auteur": "Proverbe Africain"
    },
    {
        "citation": "Toujours je regretterai, maman, papa, de vous avoir fait pleurer au temps où nos coeurs ne se comprenaient pas.",
        "auteur": "Georges Brassens "
    },
    {
        "citation": "C'est pas vraiment de ma faute si y'en a qui ont faim, mais ça le deviendrait si on y changeait rien.",
        "auteur": "Coluche"
    },

]
//Citation au hasard
const newCitation = citations[Math.floor(Math.random() * citations.length)];
document.getElementById("citation").innerHTML = '"' + newCitation["citation"] + '"';
auteur.innerHTML = "- Par " + newCitation["auteur"];

function validate(e) {

  var x = document.forms["Number"]["Lucky"].value;

//  if (x == "") {
//     alert("Veuillez choisir un numero");
//     // return false;
//   }

  //si on doit afficher une citation,l'afficher avec le nom de l'auteur
	if (!isNaN(x)){
			e.preventDefault();
			newCitation = citations[Math.floor(Math.random() * citations.length)];
			document.getElementById("citation").innerHTML = '"' + newCitation["citation"] + '"';
			auteur.innerHTML = "- Par " + newCitation["auteur"];
			alert(citations.innerHTML);
		}
		e.preventDefault();
}

