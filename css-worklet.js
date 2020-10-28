registerPaint('WaveUnderline', class {

    static get inputProperties() { return ['--underlineColor1', '--underlineColor2', '--waveTime']; }

    static get contextOptions() { return { alpha: true }; }

    paint(ctx, size, props) {
        ctx.lineWidth = 1.5;
        const waveTime = props.get('--waveTime') ?? 0;
        const color1 = props.get('--underlineColor1');
        const color2 = props.get('--underlineColor2');
        this.drawWavyLine(ctx, size, color1, waveTime, 0);
        this.drawWavyLine(ctx, size, color2, waveTime, 1.5);
    }

    drawWavyLine(ctx, size, color, waveTime, yOffset) {
        const offsetBottom = 3;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(0, size.height - offsetBottom);
        for (let i = 0; i < size.width; i++) {
            const t = i / size.width;
            const y = Math.sin(i * 0.1 + waveTime * Math.PI * 10);
            ctx.lineTo(t * size.width, size.height - offsetBottom + y + yOffset);
        }
        ctx.stroke();
    }
});
