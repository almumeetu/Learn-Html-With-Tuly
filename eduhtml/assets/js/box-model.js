// CSS Box Model Simulator Logic

document.addEventListener('DOMContentLoaded', () => {
    // Control Sliders
    const sWidth = document.getElementById('slider-width');
    const sHeight = document.getElementById('slider-height');
    const sPadding = document.getElementById('slider-padding');
    const sBorder = document.getElementById('slider-border');
    const sMargin = document.getElementById('slider-margin');

    // Value Labels
    const valWidth = document.getElementById('val-width');
    const valHeight = document.getElementById('val-height');
    const valPadding = document.getElementById('val-padding');
    const valBorder = document.getElementById('val-border');
    const valMargin = document.getElementById('val-margin');

    // Code Outputs
    const codeWidth = document.getElementById('code-width');
    const codeHeight = document.getElementById('code-height');
    const codePadding = document.getElementById('code-padding');
    const codeBorder = document.getElementById('code-border');
    const codeMargin = document.getElementById('code-margin');

    // Simulated Elements
    const rMargin = document.getElementById('render-margin');
    const rBorder = document.getElementById('render-border');
    const rPadding = document.getElementById('render-padding');
    const rContent = document.getElementById('render-content');
    const rDimensions = document.getElementById('render-dimensions');

    // Update dimensions and styling rendering
    function updateVisualizer() {
        const w = sWidth.value;
        const h = sHeight.value;
        const p = sPadding.value;
        const b = sBorder.value;
        const m = sMargin.value;

        // 1. Update text label outputs
        valWidth.textContent = `${w}px`;
        valHeight.textContent = `${h}px`;
        valPadding.textContent = `${p}px`;
        valBorder.textContent = `${b}px`;
        valMargin.textContent = `${m}px`;

        // 2. Update code block labels
        codeWidth.textContent = `${w}px`;
        codeHeight.textContent = `${h}px`;
        codePadding.textContent = `${p}px`;
        codeBorder.textContent = `${b}px`;
        codeMargin.textContent = `${m}px`;

        // 3. Apply style changes to simulated HTML boxes
        rContent.style.width = `${w}px`;
        rContent.style.height = `${h}px`;
        rDimensions.textContent = `${w} × ${h}`;

        rPadding.style.padding = `${p}px`;
        rBorder.style.borderWidth = `${b}px`;
        
        // We simulate margin by padding the outermost container
        rMargin.style.padding = `${m}px`;

        // 4. Trigger badge unlock in EduHTML if it exists
        if (typeof EduHTML !== 'undefined') {
            EduHTML.unlockBadge('visualizer_pro');
        }
    }

    // Attach slide listeners
    sWidth.addEventListener('input', updateVisualizer);
    sHeight.addEventListener('input', updateVisualizer);
    sPadding.addEventListener('input', updateVisualizer);
    sBorder.addEventListener('input', updateVisualizer);
    sMargin.addEventListener('input', updateVisualizer);

    // Initial render
    updateVisualizer();
});
