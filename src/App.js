
import React from 'react';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
function App() {
  return (
    <div className="ui container">
      <div class="ui placeholder segment">
        <div class="ui two column stackable center aligned grid">

          <div class="middle aligned row">
            <div class="column">
              <QuestionOne />
            </div>
            <div class="column">
              <QuestionTwo />
            </div>
          </div>
        </div>
      </div>


    </div>

  );
}

export default App;
