import Card from "../components/Card";
import Statistic from "../components/Statistic";

function Section1()
{
return(
    <div className="Sec1">
    <div className="Pic">
        PICTURE SWITCHING
    </div>
    <div className="Backg1">
    <div className="Cards" style={{marginBottom: "3rem"}}>
        <Card/>
        <Card/>
        <Card/>
    </div>
    <div className="About">
        ABOUT SECURITY SHIT
    </div>
    </div>
    <div className="Backg2">
        <Statistic/>
    </div>
    <div className="Backg3">
        <div className="Hedo">
            Hedo text
        </div>
        <div className="Cards">
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
    <div className="Backg2">
        <Statistic/>
    </div>
    </div>
)
}
export default Section1

