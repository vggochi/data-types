// ===============================
// Checkout Inteligente
// ===============================

document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página

    // 1️⃣ Captura dos valores do formulário (sempre strings)
    const inputPreco = document.getElementById('preco').value;
    const inputQtd = document.getElementById('qtd').value;
    const inputCupom = document.getElementById('cupom').value;

    // ============================
    // 2️⃣ Conversão de tipos (Type Casting)
    // ============================

    const preco = parseFloat(inputPreco);       // string -> número decimal
    const qtd = parseInt(inputQtd);             // string -> número inteiro
    const cupom = inputCupom === "true";        // string "true"/"false" -> boolean

    const resultadoDiv = document.getElementById('resultado');

    // ============================
    // 3️⃣ Tratamento de erros
    // ============================
    if (isNaN(preco) || isNaN(qtd)) {
        resultadoDiv.innerHTML = '<span style="color:red">Erro: Insira valores numéricos válidos!</span>';
        console.log("> ERRO: Valor inválido detectado!");
        return;
    }

    // ============================
    // 4️⃣ Cálculo do subtotal, desconto e total
    // ============================
    const subtotal = preco * qtd;
    const desconto = cupom ? subtotal * 0.10 : 0;
    const total = subtotal - desconto;

    // ============================
    // 5️⃣ Formatação em moeda brasileira
    // ============================
    const subtotalFormatado = subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const descontoFormatado = desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const totalFormatado = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    // Exibição na tela
    resultadoDiv.innerHTML = `
        Subtotal: <strong>${subtotalFormatado}</strong><br>
        Desconto: <strong>${descontoFormatado}</strong><br>
        Total: <strong>${totalFormatado}</strong>
    `;

    // ============================
    // 6️⃣ Logs no console (demonstração técnica)
    // ============================
    console.log("> Iniciando processamento...");
    console.log("> Casting de Preço:", typeof preco, "(", preco, ")");
    console.log("> Casting de Qtd:", typeof qtd, "(", qtd, ")");
    console.log("> Casting de Cupom:", typeof cupom, "(", cupom, ")");
    console.log("> ----------------------------------");
    console.log("Subtotal:", subtotalFormatado);
    console.log("Desconto:", descontoFormatado);
    console.log("> TOTAL FINAL:", totalFormatado);

    // ============================
    // 7️⃣ Demonstração técnica do parseFloat, parseInt e boolean casting
    // ============================
    console.log("parseFloat(inputPreco):", parseFloat(inputPreco));
    console.log("parseInt(inputQtd):", parseInt(inputQtd));
    console.log("Boolean casting (inputCupom === 'true'):", inputCupom === "true");
});