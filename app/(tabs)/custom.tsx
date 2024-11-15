import React, { useState } from "react"

import ThemedTextInput from "@/components/ThemedTextInput"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Button, Image, StyleSheet } from "react-native"

export default function TabThreeScreen() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#989898", dark: "#2287df" }}
            headerImage={
                <Image
                    source={require("@/assets/images/bg-auth.jpg")}
                    // style={styles.logo}
                />
            }
        >
            <ThemedView
                style={{ backgroundImage: "@/assets/images/bg-auth.jpg" }}
            >
                <ThemedText type="title" style={styles.stepContainer}>
                    Цифровой двойник!
                </ThemedText>

                <Button
                    title={isOpen ? "Скрыть" : "Показать"}
                    color={"#2287df"}
                    onPress={() => setIsOpen((prev) => !prev)}
                />
                {isOpen && (
                    <ThemedText style={styles.stepContainer}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit delectus praesentium ex adipisci et blanditiis
                        aut optio quaerat. Voluptatem corporis soluta laborum
                        architecto enim quidem magnam voluptatum id odit rerum
                        eligendi, voluptas aliquid, officiis consectetur sequi
                        eos quis esse. Unde eligendi ullam eveniet sequi,
                        provident saepe doloremque sunt non magni deleniti eos,
                        reiciendis asperiores delectus similique, dolores quod
                        veniam eius quibusdam excepturi. Totam illo pariatur
                        quasi illum quos. Quam, et vitae doloribus in ducimus
                        illum doloremque fuga facilis quaerat illo nihil
                        accusantium beatae cumque nemo est veritatis commodi
                        totam nesciunt. Dolorem nesciunt qui nemo odit eos,
                        autem omnis repellat vel veritatis, laborum nisi
                        doloremque dolore est consequatur aperiam tenetur ad
                        modi eum numquam, maiores minus quod! Cupiditate
                        quisquam eaque reiciendis, minima facilis voluptatibus
                        porro, deleniti ipsa amet consectetur impedit laborum
                        esse quam error voluptates tempora ducimus quasi fugit
                        animi, velit commodi quas ipsam. Assumenda, quam vero
                        harum cupiditate esse distinctio in. Impedit quis quos,
                        nulla, excepturi veritatis porro adipisci, distinctio
                        mollitia delectus est dolor alias ad? Perferendis beatae
                        sequi aperiam cum. Aut corrupti quas culpa provident
                        molestias molestiae tempora enim architecto! Quos eaque
                        impedit eius deleniti animi omnis adipisci repellendus
                        explicabo beatae consequatur eveniet commodi ad sunt, id
                        optio itaque facilis porro, quod architecto, ullam
                        aspernatur? Aliquam maiores laboriosam neque porro illum
                        omnis soluta quam quod sint beatae sed eligendi ullam
                        deleniti, nihil molestias minima nam! Facere saepe
                        tempora impedit, id laudantium adipisci numquam, in
                        delectus repudiandae ab voluptate veritatis mollitia,
                        culpa nostrum minus error. Nulla inventore atque
                        asperiores temporibus eaque dolores voluptates enim,
                        officia quam necessitatibus voluptatibus rem laboriosam
                        voluptas ab? Veniam, aspernatur vero. Voluptates
                        praesentium asperiores perspiciatis dignissimos quos
                        molestias, iste, vel nam dolorum expedita veritatis rem
                        quas nostrum! Aut numquam eos deserunt optio illum ipsam
                        dicta doloremque, cum debitis assumenda. Exercitationem
                        temporibus laboriosam, ipsum a molestiae beatae?
                    </ThemedText>
                )}
            </ThemedView>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#2287df",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
        marginTop: 8,
    },
    logo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
})
