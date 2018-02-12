var input = document.getElementById("gl-search-keyword");
var awesomplete = new Awesomplete(input, {
  minChars: 1, 
  autoFirst: true,
  maxItems: 10
});
awesomplete.list = ['Arabic 12-item General Health Questionnaire', 'Outcome Questionnaire', 'Problem Areas in Diabetes survey', 'St Georges Respiratory Questionnaire', '10/66 Dementia Research Group diagnostic assessment for dementia', 'Arabic Childrens Depression Inventory'];