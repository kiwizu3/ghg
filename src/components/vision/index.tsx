import React from 'react';
function Vision() {

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 text-center mx-auto my-3">
          <p>
            "gohomegota2022.com" අපි පටන් ගත්තේ ලංකාවේ තරුණයන් විසින් අපේ රටේ දැන් පවතින දූශිත දේශපාලනයට තිත තැබේමේ අරගලයට දැනුම මධ්යගත කිරීමේ අරමුණක් විදියට.
            ඒත් මෙය මෙතනින් නැවැත්විය නොහැක. අපි සටන් කල යුත්තේ ලංකාවේ වෙනස් නොවන ප්‍රතිපත්ති රාමුවක්(Policy Framework) සාදා ගැනීමටයි. ඒ සඳහා මෙහි දිශානතිය කුමක් විය යුතුදැයි අපට කියන්න.
            Let’s rebuild Sri Lanka together!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-4 col-md 12 mx-auto text-center my-3">
          <button className="btn btn-outline-light" onClick={() => {
            window.open('https://docs.google.com/forms/d/1CQIvzmNs9Rn6lq1FMCdY3NsXtzi-xWXEC75gAPbvHL4/edit?usp=sharing', '_blank');
          }}>Submit Feedback</button>
        </div>
      </div>
    </>
  )
}
export default Vision;