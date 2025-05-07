interface MajorCredits {
    credits: number;
    brand: "major"
} 
interface MinorCredits {
    credits: number;
    brand: "minor"
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
    const sum = subject1 + subject2
    return {
        credits: sum,
        brand: 'major'
    }
    
}   
function sumMinorCredits(subject1: number, subject2: number): MinorCredits{
    const sum = subject1 + subject2
    return {
        credits: sum,
        brand: "minor"
    }
}
