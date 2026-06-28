import time
import matplotlib.pyplot as plt

from Autónomo.EnfoqueA import fib_fuerza_bruta
from Autónomo.EnfoqueB import fib_memo


def medir_rendimiento():
    resultados = []

    # Valores de n a probar
    valores_n = [10, 20, 25, 30, 35]

    for n in valores_n:

        # Fuerza bruta
        inicio_fb = time.perf_counter_ns()
        fib_fuerza_bruta(n)
        fin_fb = time.perf_counter_ns()

        # Limpiar el caché antes de medir la memoización
        fib_memo.cache_clear()

        inicio_mem = time.perf_counter_ns()
        fib_memo(n)
        fin_mem = time.perf_counter_ns()

        resultados.append({
            "N": n,
            "FB_ns": fin_fb - inicio_fb,
            "Memo_ns": fin_mem - inicio_mem
        })

    return resultados


if __name__ == "__main__":

    resultados = medir_rendimiento()

    print("-" * 45)
    print(f"{'N':<8}{'Fuerza Bruta(ns)':<20}{'Memo(ns)'}")
    print("-" * 45)

    for r in resultados:
        print(f"{r['N']:<8}{r['FB_ns']:<20}{r['Memo_ns']}")

    print("-" * 45)
    
# ==========================
# Crear listas para la gráfica
# ==========================

n = []
fb = []
memo = []

for r in resultados:
    n.append(r["N"])
    fb.append(r["FB_ns"])
    memo.append(r["Memo_ns"])

# ==========================
# Crear la gráfica
# ==========================

plt.figure(figsize=(8,5))

plt.plot(n, fb, marker="o", label="Fuerza Bruta")

plt.plot(n, memo, marker="s", label="Memoización")

plt.title("Comparación de Rendimiento")

plt.xlabel("Tamaño de Entrada (N)")

plt.ylabel("Tiempo de Ejecución (ns)")

plt.grid(True)

plt.legend()

plt.show()