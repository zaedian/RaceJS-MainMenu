document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.getElementById('main-menu');
    const settingsScreen = document.getElementById('settings-screen');
    const settingsBtn = document.getElementById('settings-btn');
    const backToMainBtn = document.getElementById('back-to-main-btn');

    const soundVolumeSlider = document.getElementById('sound-volume');
    const soundValueDisplay = document.getElementById('sound-value');

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            mainMenu.classList.add('hidden');
            settingsScreen.classList.remove('hidden');
            // Ensure settings screen is positioned correctly if its default transform is different
            settingsScreen.style.transform = 'translate(-50%, -50%)';
            mainMenu.style.transform = 'translate(-50%, -60%)'; // Move main menu further away
        });
    }

    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', () => {
            settingsScreen.classList.add('hidden');
            mainMenu.classList.remove('hidden');
            mainMenu.style.transform = 'translate(-50%, -50%)';
            settingsScreen.style.transform = 'translate(-50%, -40%)'; // Move settings further away
        });
    }

    if (soundVolumeSlider && soundValueDisplay) {
        soundVolumeSlider.addEventListener('input', (event) => {
            soundValueDisplay.textContent = `${event.target.value}%`;
            // Here you would typically call a function in your Three.js game
            // to update the actual sound volume, e.g.:
            // if (window.myGame && typeof window.myGame.setVolume === 'function') {
            //     window.myGame.setVolume(event.target.value / 100);
            // }
            console.log(`Sound volume set to: ${event.target.value}%`);
        });
    }

    // Placeholder for other settings interactions
    const graphicsSelect = document.getElementById('graphics-select');
    if (graphicsSelect) {
        graphicsSelect.addEventListener('change', (event) => {
            console.log(`Graphics detail set to: ${event.target.value}`);
            // Call your Three.js function: window.myGame.setGraphics(event.target.value);
        });
    }

    const shadowsSelect = document.getElementById('shadows-select');
    if (shadowsSelect) {
        shadowsSelect.addEventListener('change', (event) => {
            console.log(`Shadows set to: ${event.target.value}`);
            // Call your Three.js function: window.myGame.setShadows(event.target.value);
        });
    }

    const resolutionSelect = document.getElementById('resolution-select');
    if (resolutionSelect) {
        resolutionSelect.addEventListener('change', (event) => {
            console.log(`Resolution set to: ${event.target.value}`);
            // Call your Three.js function: window.myGame.setResolution(event.target.value);
        });
    }
	
	    const fognSelect = document.getElementById('fog-select');
    if (resolutionSelect) {
        resolutionSelect.addEventListener('change', (event) => {
            console.log(`Fog set to: ${event.target.value}`);
            // Call your Three.js function for fog
        });
    }

    // add similar event listeners for other settings,
	
	
	
	
	
	document.addEventListener('DOMContentLoaded', () => {
    const mapSelect = document.getElementById('map-select');
    const mapSelectionDisplay = document.createElement('div');
    mapSelectionDisplay.id = 'map-selection-display';
    mapSelectionDisplay.style.marginTop = '10px';
    mapSelectionDisplay.style.fontSize = '1.2em';
    document.querySelector('.main-interaction-area').appendChild(mapSelectionDisplay);

    // Display the currently selected map below the dropdown
    if (mapSelect) {
        mapSelect.addEventListener('change', (event) => {
            const selectedMap = event.target.value;
            mapSelectionDisplay.textContent = `Selected Map: ${selectedMap.charAt(0).toUpperCase() + selectedMap.slice(1)}`;
            console.log(`Map selected: ${selectedMap}`);
            // Here you can call a function to load the map into the game or display a preview:
            // loadMap(selectedMap); // Example function call
        });
    }
});


function loadMap(mapName) {
    // Here, you can call your game's map loading logic
    console.log(`Loading map: ${mapName}`);
    // For example, you could switch scenes in a game engine or load assets for the map.
    // Example: if (mapName === 'city') { loadCityMap(); }
}


});