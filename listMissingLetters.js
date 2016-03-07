//Donald Cherestal coding challenge #1

function listMissingLetters(s){
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    //remove special characters
    s = s.replace(/[^a-zA-Z]/g, "");
	//set input string to lower case
    s = s.toLowerCase();
    //array to hold search results
    var hits = [];

    //loop through each letter in string
    for (var i = 0; i < alpha.length; i++) {
		//check if letter exists in input, if not, add to array
        if(s.indexOf(alpha[i]) == -1) { 
			hits.push(alpha[i]);
		}
    }
    //log array to console
    console.log(hits);
}

//test cases
listMissingLetters("A quick brown fox jumps over the lazy dog");
listMissingLetters("Four score and seven years ago.");
listMissingLetters("To be or not to be, that is the question!");
listMissingLetters("");