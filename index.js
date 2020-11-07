const prompt = require('prompt');
const puppet = require("puppeteer");

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

const pages = await browser.pages();
const page = pages[0];
await page.goto(newUrl);
await page.setViewport({ width: 1366, height: 768 });
return page;
}

const goEasyApply = async () => {


  let ar = document.querySelectorAll("li[class*=react-job-listing]")
  let arr = Array.prototype.filter.call(ar, (el) => el.innerText.contains("Easy Apply"));
  console.log('hi');
  let arrayTest = [];

  arrayTest.push(arr[4]);

  arrayTest.forEach(element => {
  	  	console.log(element.innerText)
  	element.click();
  });
document.querySelector("span[class*=closeIcon]").click();
}

const pupp = async ()=> {
const page = await setup();
await page.evaluate(goEasyApply);
//page.click("svg[class*=closeIcon]");


page.evaluate(()=> {
setTimeout(()=>{
  			console.log("click");
  			console.log("button here");
  			console.log(document.querySelector("button[class*=applyButton]"));
  			document.querySelector("button[class*=applyButton]").click();
 	//page.click("button[class*=applyButton]");
 	console.log("done"); 	
  		}, 5000);
}, );


page.evaluate(() => {
	const searchLabels = (document) => {var already = [];
var ar = Array.prototype.filter.call(document.querySelectorAll('div,span,label'), (el)=> {
if (already.includes(el.innerText)) return false;
already.push(el.innerText);
return el.innerText.endsWith('*')  && el.innerText.length < 200 && el.innerText.length > 2
})
// document.querySelectorAll('iframe').forEach( item =>
//     console.log(item.contentWindow.document.body.querySelectorAll('label'))
// )
return ar;
};

setTimeout(()=>{
	console.log("searching labels");
	 const ar = searchLabels(document);

 console.log(ar);
}, 5000);

});


};