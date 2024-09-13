<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu do Restaurante</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .menu-section {
            margin: 20px 0;
        }
        .menu-section h2 {
            background: #444;
            color: #fff;
            padding: 10px;
            margin: 0;
        }
        .menu-item {
            background: #fff;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
        }
        .menu-item h3 {
            margin: 0;
            color: #333;
        }
        .menu-item p {
            margin: 5px 0 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Menu do Restaurante</h1>
    </header>
    <div class="container">
        <div class="menu-section">
            <h2>Entradas</h2>
            <div class="menu-item">
                <h3>Bruschetta</h3>
                <p>R$ 20,00 - Pão com tomate, manjericão e azeite de oliva.</p>
            </div>
            <div class="menu-item">
                <h3>Salada Caesar</h3>
                <p>R$ 25,00 - Alface, frango grelhado, croutons e molho Caesar.</p>
            </div>
        </div>
        <div class="menu-section">
            <h2>Pratos Principais</h2>
            <div class="menu-item">
                <h3>Espaguete à Bolonhesa</h3>
                <p>R$ 45,00 - Espaguete com molho de carne e tomate.</p>
            </div>
            <div class="menu-item">
                <h3>Filé Mignon</h3>
                <p>R$ 70,00 - Filé mignon grelhado com molho de vinho tinto.</p>
            </div>
        </div>
        <div class="menu-section">
            <h2>Sobremesas</h2>
            <div class="menu-item">
                <h3>Tiramisu</h3>
                <p>R$ 30,00 - Sobremesa italiana com café e mascarpone.</p>
            </div>
            <div class="menu-item">
                <h3>Cheesecake</h3>
                <p>R$ 28,00 - Cheesecake com calda de frutas vermelhas.</p>
            </div>
        </div>
    </div>
</body>
</html>
