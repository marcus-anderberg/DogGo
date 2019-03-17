import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const History = () => (
  <div>
    <div>
      <table>
        <tr>
      
          <th>Date</th>
          <th>Time</th>
          <th> #1s</th>
          <th> #2s</th>
          <td>Delete</td>

        </tr>
        <tr>
          
          <td>1/1/19</td>
          <td>01:02</td>
          <td>3</td>
          <td>2</td>
          <td><button>delete</button></td>
        </tr>
        <tr>
     
          <td>3/3/19</td>
          <td>01:02</td>
          <td>5</td>
          <td>2</td>
          <td><button>delete</button></td>
        </tr>
        <tr>
          
          <td>3/3/19</td>
          <td>01:02</td>
          <td>6</td>
          <td>2</td>
          <td><button>delete</button></td>
        </tr>
      
      </table>
    </div>
  </div>
);

export default History;
