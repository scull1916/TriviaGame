


$(document).ready(function()
{

var t = 30;
var timeOut;
var userPick = "place holder";
var questOne =
{
	num: 1,
	qInt: "Fill in the blank",
	qText: "Hello. My name is ________. Prepare to die.",
	qAns: ["Fezzik", "Westley", "Buttercup", "Inigo Montoya"],
	cAns: "Inigo Montoya"


};



//Push the question text to the TriviaGame page
$(".qTxt").text(questOne.qText);




//Push the answers to the Trivia game buttons
for (i=0; i<questOne.qAns.length; i++)
{
	
	//Push an answer to a button
	$("<button></button>").appendTo(".questions").addClass("btn btn-success btn-lg btn-block").text(questOne.qAns[i]);
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








});

console.log(userPick);

//close document.ready
});

