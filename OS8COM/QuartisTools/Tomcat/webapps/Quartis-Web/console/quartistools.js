var updateMemory = new Function();
var updateMemoryIndex = new Function();
var useNativeBrowser = false;

function initMemories(memories) {
    if(!useNativeBrowser){
        for(var i=0; i < memories.length; listenMemory(memories[i++]));
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function executeLPX(scenario, args) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('executeLPX') + '&amp;' + encodeURIComponent(scenario);
        for(var i=0; i < args.length; command += '&amp;' + encodeURIComponent(args[i++]));
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function listenMemory(memory) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('listenMemory') + '&amp;' + encodeURIComponent(memory);
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function refreshMemory(memory) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('refreshMemory') + '&amp;' + encodeURIComponent(memory);
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function refreshMemoryIndex(memory, index) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('refreshMemoryIndex') + '&amp;' + encodeURIComponent(memory) + '&amp;' + encodeURIComponent(index);
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function writeMemory(memory, value) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('writeMemory') + '&amp;' + encodeURIComponent(memory) + '&amp;' + encodeURIComponent(value);
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function writeMemoryIndex(memory, value, index) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('writeMemoryIndex') + '&amp;' + encodeURIComponent(memory) + '&amp;' + encodeURIComponent(value) + '&amp;' + encodeURIComponent(index);
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function openWindow(name) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('openWindow') + '&amp;' + encodeURIComponent(name);
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}

function closeWindow(name) {
    if(!useNativeBrowser){
        var command = 'command://' + encodeURIComponent('closeWindow') + '&amp;' + encodeURIComponent(name);
        window.location = command;
    } else {
        alert('Le param�tre - useNativeBrowser - est � true !');
    }
}