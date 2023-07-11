<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <section class="first">
            <div>
                <h1>Metric/Imperial Unit Converter</h1>
                <!-- <p id="digit"></p> -->
                <form>
                    <label for="cnumber"></label>
                    <input type="text" name="cnumber" class="digit" id="convert-number" value="">
                </form>
                <!-- <input class="digit" value=""> -->
                <button id="convert-btn">convert</button>
            </div>
        </section>
        <section class="second">
            <div class="length">
                <h3>Lenght (Meter/Feet)</h3>
                <p id="lenght"></p>
            </div>
            <div class="volume">
                <h3>Volume (Liters/Gallons)</h3>
                <p id="volume"></p>
            </div>
            <div class="mass">
                <h3>Mass (Kilograms/Pounds)</h3>
                <p id="mass"></p>
            </div>
        </section>
        <script src="index.js"></script>
    </body>
</html>
