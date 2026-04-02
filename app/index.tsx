import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A criadora do Minecraft</Text>
      <Logo />
      <Slogan />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/entrar")}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

// Logo da empresa
const Logo = () => (
  <Image
    source={{
      uri: "https://preview.redd.it/i-know-this-isnt-the-mojang-logo-anymore-but-what-is-this-v0-ypm42j24r8k71.png?width=640&crop=smart&auto=webp&s=d7e11ce19fce808ef18eab650516e889fb944817"
    }}
    style={{ width: 150, height: 150, marginTop: 20 }}
  />
);

// Slogan
const Slogan = () => (
  <View style={{ alignItems: "center" }}>
    <Text
      style={{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
        color: "white"
      }}
    >
      MOJANG
    </Text>
  </View>
);

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC4A31"
  },
  title: {
    fontSize: 18,
    color: "white"
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30
  },
 buttonText: {
    color: "#DC4A31",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  }
});