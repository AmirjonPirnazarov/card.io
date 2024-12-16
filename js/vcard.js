function downloadVCard() {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Amir Pirnazarov
TITLE:Head of Digital DMA @Yagonchi, Co-Founder
TEL:+992920090909
EMAIL:pirnazarova988@gmail.com
ADR:;;Tajikistan, Khujand, 735700;;;;
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'amir_pirnazarov.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
}