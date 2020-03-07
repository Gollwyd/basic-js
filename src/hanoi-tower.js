module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   turnsSpeed
    let terns = 0;
    if (disksNumber == 1) terns = 1; else {
        terns = Math.pow(2, disksNumber)-1;
    }
    nTerns = BigInt(terns);
    let ntri = BigInt(3600);
    let nturnsSpeed = BigInt(turnsSpeed);
    let nSek = nTerns*ntri/nturnsSpeed;
    let seconds = Number(nSek);
    let obj = {
        turns: terns,
        seconds: seconds,
    };
    return obj;
}