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
    1. Project A: Password Cracking with Hashcat
    2. Project B: Web Application Vulnerability Scanning
    3. Project C: Network Traffic Analysis with Wireshark
    `,
    contact: `
    Contact Information:
    - Email: cyberbasherr@gmail.com
    - LinkedIn: Stevin Ramesh
    - GitHub: cyberbasher
    - tryhackme: stevinramesh
    - Hack The Box: sjstevin
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
