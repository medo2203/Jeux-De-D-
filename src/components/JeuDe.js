import React, { Component } from 'react'
import de from '../images/Dé.png'
import '../index.css';
import Dice from '../images/dice.png'
import One from '../images/one.png'
import Two from '../images/two.png'
import Three from '../images/three.png'
import Four from '../images/four.png'
import Five from '../images/five.png'
import Six from '../images/six.png'
export class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false };
    }
    jouer() {
        if (this.state.fin == false) {
            const valeur = Math.floor(Math.random() * 6) + 1;
            var compteur = this.state.compteur;
            this.setState({ face: valeur, compteur: compteur + 1, fin: false });
            console.log(valeur);
            console.log(this.props.cache);
            if (valeur == this.props.cache) {
                this.setState({fin: true });

                console.log("Congratulation");
            } else {
                console.log("Try again");
            }
        }
    }
    getImage(){
        let odm = Dice
        switch(this.state.face){
            case 1:
                odm = One
                break;
            case 2:
                odm = Two
                break;
            case 3:
                odm = Three
                break;
            case 4:
                odm = Four
                break;
            case 5:
                odm = Five
                break;
            case 6:
                odm = Six   
        }
        return odm
    }
    
    initialiser() {
        this.setState({ face: null, compteur: 0, fin: false });
    }
    render() {
        const styleImage={width:"100px", height:"80px"}
        return (
            <div>
                <img className="jouer_img" src={de} />
                <h1>Jeu de Dé...</h1>
                <img src={this.getImage()} style={styleImage}></img>
                <h2>nombre d'essais {this.state.compteur}</h2>
                {this.state.fin == false?<button onClick={() => this.jouer()}>jouer</button>:""}
                {this.state.fin?<p>Bravo vous avez trouvez la face cachée.....</p>:""}
                {this.state.fin?<button onClick={() => this.initialiser()}>Initialiser</button>:""}
            </div>
        )
    }
}

export default JeuDe