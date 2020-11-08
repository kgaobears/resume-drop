const prompt = require('prompt');
const puppet = require("puppeteer");
const utils = require("./utils");

prompt.start();
prompt.message = ""
const questions = ['path_to_resume', 'path_to_cover_letter',
]
prompt.get(questions, function (err, result) {
    if (err) { 
    	console.log('\nCancelled.');
    	process.exit();
    	return onErr(err); 
    }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.path_to_resume);
    console.log('  Email: ' + result.path_to_cover_letter);
    pupp();
});

function onErr(err) {
    console.log(err);
    return 1;
}


const setup = async () => {
const browser = await puppet.launch({
	ignoreHTTPSErrors: true,
	args: ["--disable-web-security"],
  headless: false,
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
var newUrl = "https://www.glassdoor.com/Job/software-engineer-intern-jobs-SRCH_KO0,24.htm?jobType=internship&includeNoSalaryJobs=false";
//var newUrl = "https://www.google.com";
const pages = await browser.pages();
const page = pages[0];
await page.goto(newUrl);
await page.setViewport({ width: 1366, height: 768 });
return page;
}



const goEasyApply = async () => {

	return await new Promise(async resolve => { // <-- return the data to node.js from browser
            // scraping
            const hello = new Promise(resolve=>{resolve([1,2,3])});
            let arr = await document.querySelectorAll("input");
            // let ar = await document.querySelectorAll("li[class*=react-job-listing]")
            // let arr = Array.from(ar).filter((el) => el.innerText.contains("Easy Apply"));
            resolve(arr);
        })};

// 	const searchLabels = (document) => {var already = [];
// 	var ar = Array.prototype.filter.call(document.querySelectorAll('div,span,label'), (el)=> {
// 	if (already.includes(el.innerText)) return false;
// 	already.push(el.innerText);
// 	return el.innerText.endsWith('*')  && el.innerText.length < 200 && el.innerText.length > 2
// 	})

// 	return ar;
// 	};

// 	const bfs = (element, optionalFilt = (curr) => {return false}) => {
//         var again = [];
// 		const stack = [element];
// 		while (stack.length > 0) {
//           var curr = stack.shift();
//             again.push(curr);
//           if ((curr.tagName === "INPUT" || curr.tagName === "TEXTAREA" || optionalFilt(curr)) && curr.type !== "hidden") {
//             return curr;
//           }
//           Array.from(curr.childNodes).forEach((el)=>{
//             if (el !== null && el !== undefined && !again.includes(el)) {
// //console.log("new push:", el);
//             stack.push(el);
//             }
//           });
//             stack.push(curr.parentNode);
//             if (curr.nextSibling !== null && !again.includes(curr.nextSibling)) {
//             stack.push(curr.nextSibling);
//             }
//             if (curr.previousSibling !== null && !again.includes(curr.previousSibling)) {
//             stack.push(curr.previousSibling);
//             }
// 		}
// 	}

//   let ar = document.querySelectorAll("li[class*=react-job-listing]")
//   let arr = Array.prototype.filter.call(ar, (el) => el.innerText.contains("Easy Apply"));
//   console.log('hi');
//   let arrayTest = [];

//   arrayTest.push(arr[1]);

//   arrayTest.forEach(element => {
//   	  	console.log(element.innerText)
//   	element.click();

//   	  // close icon

//   document.querySelector("span[class*=closeIcon]").click();

//   // click easy apply
//   setTimeout(()=>{
//   		document.querySelector("button[class*=applyButton]").click();	
//   }, 5000);

// // search labels
//   setTimeout(()=>{
// 	   const ar = searchLabels(document);
// 	   console.log(ar);

// 	   ar.forEach((el) => {
// 	   	var answer = "test";
// 	   	console.log("START OF", el)
// 	   	switch (true) {
// 	   		case el.innerText.includes("City"):
// 	   			answer = "Livermore";
// 	   			break;
// 	   		case el.innerText.includes("First Name"):
// 	   			answer = "Kevin";
// 	   			break;
// 	   		case el.innerText.includes("Last Name"):
// 	   			answer = "Gao";
// 	   			break;
// 	   		case el.innerText.includes("Name"):
// 	   			answer = "Kevin Gao";
// 	   			break;
//    			case el.innerText.includes("Postal"):
// 	   			answer = "94550";
// 	   			break;
//    			case el.innerText.includes("ZIP"):
// 	   			answer = "94550";
// 	   			break;
//    			case el.innerText.includes("Country"):
// 	   			answer = "United States";
// 	   			break;
// 	   		case el.innerText.toLowerCase().includes("highest education"):
// 	   			answer = "Bachelor of Science";
// 	   			break;
//    			case el.innerText.includes("Phone"):
// 	   			answer = "9255198116";
// 	   			break;
//    			case el.innerText.toLowerCase().includes("address"):
// 	   			answer = "1662 Call of the Wild Court";
// 	   		case el.innerText.toLowerCase().includes("email address"):
// 	   			answer = "kevinyanggao@gmail.com";
// 	   			break;
// 	   		case el.innerText.toLowerCase().includes("email"):
// 	   			answer = "kevinyanggao@gmail.com";
// 	   			break;
//    			case el.innerText.includes("Desired Pay"):
//    				answer = "999";
//    				break;
// 			case el.innerText.includes("State"):
// 				answer = "CA";
// 				break;
// 			case el.innerText.includes("College"):
// 				answer = "University of California, Berkeley"
// 				break;
// 			case el.innerText.includes("University"):
// 				answer = "University of California, Berkeley"
// 				break;
// 			case el.innerText.includes("Gender"):
// 			console.log("GENDERRRRR", el.type, el);
// 				answer = "Male"
// 				break;
// 			case el.innerText.includes("Ethnicity"):
// 				answer = "Asian"
// 				break;
// 			case el.innerText.includes("Veteran"):
// 			console.log("VETERAN", el.type, el);
// 			var label = bfs(el, (curr)=>{ return curr.type === "checkbox"});
// 			console.log(label);
// 			label.value = "-1";
// 			answer = "";
// 				break;
// 			default:
// 				break;
// 	   	}

// 	   	if (el.innerText.includes("Date Available")) {
// 	   		console.log("Date not getting set");
// 	   	} else {
// 	   	const inputEl = bfs(el);
// 	   	inputEl.value = answer;
// 	   	console.log("NEW VAL", inputEl.value, el.innerText);

// }
// 	   })

//   }, 7000);
//   });



// }

const pupp = async ()=> {
const page = await setup();
console.log('about ot evaluate');
//const ar = await page.evaluate(goEasyApply);
const ar = await page.$$("li[class*=react-job-listing]");
var shortArray = [];
  for (const element of ar) {
    const text = await (await element.getProperty("innerText")).jsonValue();
    if (text.includes("Easy Apply")) shortArray.push(element);
  }
shortArray = [shortArray[0]];
for (const element of shortArray) {
	await element.evaluate((domObject)=>{
		domObject.scrollIntoView();
	});

	await element.click();
	console.log(await element.isIntersectingViewport());
	await element.isIntersectingViewport().then((visible) => {
	  if (!visible) {
	  	console.log('popup');
		  page.click("svg[class*=closeIcon]").catch((err) => {
			  console.log(err);
		  });
	  }
    });
    const easyApplyArray = await page.$$("button[class*=applyButton]");
    for (const el of easyApplyArray) {
    	const text = await (await el.getProperty("innerText")).jsonValue();
	    if (text.includes("Easy Apply")) {
	    	await el.click();
	    	const labels = await page.$$('div,span,label');
	    	const shortLabels = [];
	    	for (const x of labels) {

	    		const text = await (await x.getProperty("innerText")).jsonValue();
	    		if (text.trim().endsWith('*') && text.length > 2) {
	    			shortLabels.push(x);
	    		}

	    	}
	    	console.log(shortLabels.length);


	    	break;
	    }
    }

    await setTimeout(()=>{}, 4000);

}


//page.click("svg[class*=closeIcon]");


};