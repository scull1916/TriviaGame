


$(document).ready(function()
{

	var t = 30;
	var timeOut;
	var userPick = "place holder";
	var correctGuess = 0;
	var incorrectGuess = 0;
	var n = Math.floor(Math.random() * 5) + 1;
	var nCounter = 0;
	console.log(n);

//Put questions into an array of objects - yes, that's a thing.
var trivQuests = [
{
	num: 1,
	qText: "Hello. My name is ________. You killed my father. Prepare to die.",
	qAns: ["Fezzik", "Westley", "Buttercup", "Inigo Montoya"],
	cAns: "Inigo Montoya"
},

{
	num: 2,
	qText: "Who said: 'Good night, Westley. Good work. Sleep well, I will most likely kill you in the morning.'",
	qAns: ["Buttercup", "The Dread Pirate Roberts", "Vizzini", "Count Rugen"],
	cAns: "The Dread Pirate Roberts"
},

{
	num: 3,
	qText: "In the epic Battle of Wits between Westley and Vizzini a colorless, odorless, and deadly poison from Australia is used. That poison is:",
	qAns: ["Darestim", "Hebenon", "Iocaine powder", "Janis thorn"],
	cAns: "Iocaine powder"
},

{
	num: 4,
	qText: "The three terrors of the Fire Swamp are:",
	qAns: ["Flame spurts, lightning sand, and R.O.U.S.", "The Cliffs of Insanity, the Brute Squad, and flame spurts", "Vizzini, Prince Humperdinck, and Count Rugen", "Flaming broccoli, lightning sand, and Rodents of Unusual Size"],
	cAns: "Flame spurts, lightning sand, and R.O.U.S."
},

{
	num: 5,
	qText: "According to Miracle Max what's the only thing you can do when someone is all dead as opposed to MOSTLY dead?",
	qAns: ["'Dress them up and take them to the beach'", "'Make a nice MLT - mutton, lettuce, and tomato'", "'Go through his clothes and look for loose change'", "'Get involved in a land war in Asia'"],
	cAns: "'Go through his clothes and look for loose change'"
}

];

	//generate a random to pull question from the array
	//create a questions answered counter; end @ five and push answer counts
	//use a timeout to space the new question being served
	//keep the correct/incorrect alert or send message another way?
	//review the demo again




	function question()
	{

	nCounter++;

	//Push the question text to the TriviaGame page
	$(".qTxt").text(trivQuests[n].qText);

	//Push the answers to the Trivia game buttons
	for (i=0; i<trivQuests[n].qAns.length; i++)
	{
		
		//Push an answer to a button
		$("<button></button>").appendTo(".questions").addClass("btn btn-success btn-lg btn-block").attr("value",trivQuests[n].qAns[i]).text(trivQuests[n].qAns[i]);
		console.log(trivQuests[n].qAns[i]);

	}

	function timer()
	{
		t--;
		if (t>0)
		{
			timeOut = setTimeout(timer, 1000);

		}


		$("#timer").text(t);
		console.log(t)
	};

	setTimeout(timer, 1000);




	$(".btn").on("click", function()
	{
		
		clearTimeout(timeOut);
		console.log(this);
		userPick = $(this).val();
		console.log(userPick);
		if (userPick == trivQuests[n].cAns)
		{
			correctGuess++;
			console.log(correctGuess);
			// alert("Correct!");
		}
		else
		{
			incorrectGuess++;
			console.log(incorrectGuess);
			// alert("Incorrect!");
		}
	"Correct answers: " + correctGuess;
	"Incorrect answers: " + incorrectGuess;

	});

};

if (nCounter<=5)
{
	// setTimeout(question, 2000);
	question();

}




//close document.ready
});

