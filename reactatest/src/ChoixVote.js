import React from "react";

function ChoixVote({ choix, results }) {
 let conteur = 0;

  return (
    <div className="scroll">
      <div className="choix">
        <input type="radio" name={`radio ${choix.id_vote}`} className="check" />
        <input type="text" className="value" value={choix.choice} readOnly />
      </div>

        {results.map((result)=>{
          if (result.id_choix == choix.idChoice) {
                conteur ++;  
          }
        })}

      <p className="resulta1">{ "+"+conteur}</p>
    </div>
  );
}

export default ChoixVote;
