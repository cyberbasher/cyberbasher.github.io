const terminalContent = document.getElementById('terminal-content');
const terminalInput = document.getElementById('terminal-input');

const commands = {
    help: `
    Available commands:
    - help: List all commands
    - about: About me
    - skills: My skills
    - projects: My projects
    - contact: Contact information
    `,
    about: `
    About Me:
    - Name: Stevin Ramesh
    - Profession: Cybersecurity Specialist
    - Experience: 1 year in cybersecurity and IT infrastructure.
    `,
    skills: `
    Skills:
    - Network Security
    - Ethical Hacking
    - Incident Response
    - Threat Analysis
    - Cryptography
    `,
    projects: `
    Projects:
    1. Project A: [Description]
    2. Project B: [Description]
    3. Project C: [Description]
    `,
    contact: `
    Contact Information:
    - Email: stevin.ramesh@example.com
    - LinkedIn: linkedin.com/in/stevinramesh
    - GitHub: github.com/stevinramesh
    `,
};

function displayContent(content) {
    terminalContent.innerHTML += content + '\n';
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

function processCommand(command) {
    const commandText = `$ ${command}`;
    if (commands[command]) {
        displayContent(`<span style="color: #ffffff;">${commandText}</span>`);
        displayContent(commands[command]);
    } else {
        displayContent(`<span style="color: #ffffff;">${commandText}</span>`);
        displayContent(`<span style="color: #ff605c;">Unknown command: ${command}</span>`);
    }
}

terminalInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        processCommand(command);
        terminalInput.value = '';
    }
});
