const KeyStrokeSounds = [
    new Audio('/sounds/keystroke1.mp3'),
    new Audio('/sounds/keystroke2.mp3'),
    new Audio('/sounds/keystroke3.mp3'),    
    new Audio('/sounds/keystroke4.mp3'),
];

function useKeyboardSound() {
    const playRandomKeyStrokeSound = () => {

        const randomSound = KeyStrokeSounds[Math.floor(Math.random() * KeyStrokeSounds.length)];
        randomSound.currentTime = 0; // for better UX
        randomSound.play().catch((error) => console.log("Error playing sound:", error));

    }

    return { playRandomKeyStrokeSound };
}   

export default useKeyboardSound;



