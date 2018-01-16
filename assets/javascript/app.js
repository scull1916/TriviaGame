


$(document).ready(function()
{

var t = 30;
var timeOut;
var userPick = "place holder";
var correctGuess = 0;
var incorrectGuess = 0;
var questOne =
{
	num: 1,
	qInt: "Fill in the blank",
	qText: "Hello. My name is ________. You killed my father. Prepare to die.",
	qAns: ["Fezzik", "Westley", "Buttercup", "Inigo Montoya"],
	cAns: "Inigo Montoya"


};

var questTwo =
{
	num: 2,
	qInt:
	qText: "Who said: 'You have done well today, Westley. Sleep well, I will most likely kill you in the morning."


};



//Push the question text to the TriviaGame page
$(".qTxt").text(questOne.qText);




//Push the answers to the Trivia game buttons
for (i=0; i<questOne.qAns.length; i++)
{
	
	//Push an answer to a button
	$("<button></button>").appendTo(".questions").addClass("btn btn-success btn-lg btn-block").attr("value",questOne.qAns[i]).text(questOne.qAns[i]);
	console.log(questOne.qAns[i]);

}

function timer()
{
	t--;
	if (t>0)
	{
		timeOut = setTimeout(timer,1000);

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
	if (userPick == questOne.cAns)
	{
		correctGuess++;
		console.log(correctGuess);
		alert("Correct!");
	}
	else
	{
		incorrectGuess++;
		console.log(incorrectGuess);
		alert("Incorrect!");
	}






});

console.log(userPick);

//close document.ready
});

