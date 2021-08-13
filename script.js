const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12,20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach  /////////////////////////////////////
// companies.forEach((company) => {
//     // console.log(company);
//     console.log(company.name);
// })

// // filter  ///////////////////////////////////////
// // get 21 and older
// // let canDrink = [];
// // for(let i = 0; i < ages.length; i++){
// //     if(ages[i] >= 21) {
// //         canDrink.push(ages[i]);
// //     }
// // }
// // console.log(canDrink);

// // const canDrink = ages.filter(age => {
// //     if(age >= 21) {
// //         return true;
// //     }
// // });

// const canDrink = ages.filter(age => age >=21);
// console.log(canDrink);

// //filter retail
// // const retailCompanies = companies.filter(company => {
// //         if(company.category === 'Retail') {
// //             return true;
// //         }
// //     });

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// //filter 80s compnaies
// const eightiesCompanies = companies.filter(company => company.start < 1990 && company.start > 1979);
// console.log(eightiesCompanies);

// //filter companies lasting 10 years
// const decadeClub = companies.filter(company => company.end - company.start >= 10);
// console.log(decadeClub);

// //  map  /////////////////////////////////////////
// //create array of company names
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);
// // const testMap = companies.map(company => {
// //     return `${company.name} [${company.start} - ${company.end}]`;
// // });
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// ///square root of ages
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);
// const ageSquareTimesTwo = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age*2);
// console.log(ageSquareTimesTwo);

// // sort   ///////////////////////////////////////////
// //sort companies by start year
// // const sortedCompanies = companies.sort((company1, company2) => {
// //     if(company1.start > company2.start) {
// //         return 1;
// //     } else {
// //         return -1;
// //     }
// // });
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// //sort ages
// //increasing order
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);
// // descending order
// // const sortAges = ages.sort((a, b) => a + b);

// // reduce  ///////////////////////////////////////////
// // let ageSum = 0;
// // for(let i = 0; i < ages.length; i++) {
// //     ageSum += ages[i];
// // }
// // const ageSum = ages.reduce((total, age) => {
// //     return total + age
// // }, 0);
// const ageSum = ages.reduce((total, age) => total +age, 0);
// console.log(ageSum);

// //total years for all companies
// // const totalYearsAllCompanies = companies.reduce((total, company) => {
// //     return total + company.end - company.start
// // }, 0);
// const totalYearsAllCompanies = companies.reduce((total, company) => total + company.end - company.start, 0)
// console.log(totalYearsAllCompanies);



//combine methods  //////////////////////////
// const combined = ages
//     .map(age => age * 2)  //gives a new array with ages x2
//     .filter(age => age >= 40)  //filters the new array with only ages greater than 40
//     .sort((a, b) => a - b)  //gives all over 40 in numerical order
// console.log(combined);
