nombresAmigas = {"Sammy", "Maripili", "Juana"}
nombresAmigues = {"Sammy", "Antonias", "Maricarmen"}

def comparar_sets(set1, set2):
    print(f"Elementos en ambos sets: {(set1 & set2)}")
    print(f"Elementos solo en el primer set: {(set1 - set2)}")
    print(f"Elementos solo en el segundo set: {(set2 - set1)}")

comparar_sets(nombresAmigas, nombresAmigues)
