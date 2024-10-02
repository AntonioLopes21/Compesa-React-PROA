import img1 from '../assets/carrossel2.jpg';
import img2 from '../assets/carrossel-1.jpg';


function Carrossel () {

    return (

        <div className="slider">
            <input type="radio" name="radio-btn" id="radio1" checked/>
            <input type="radio" name="radio-btn" id="radio2" />

            <div className="slides">
                <div className="slide-primeiro">
                    <img src={img1} alt="imagem 1" />
                </div>
                <div className="slide">
                    <img src={img2} alt="imagem 2" />
                </div>
            </div>

            <div className="manual-navigation">
                <label for="radio1" class='btn-manual'></label>
                <label for="radio2" class='btn-manual'></label>
            </div>
        </div>

    )
}

export default Carrossel