import * as $ from "jquery"

function createAnalitics(): object {
    let counter = 0
    const listener = (): number => counter++
    let isDestroyed: boolean = false
    $(document).on("click", listener)

    return {
        destroy() {
            $(document).off("click", listener)
            isDestroyed = true
        },

        getClicks() {
            if (isDestroyed)
                return "Analitics is destroyed"
            else
                return counter
        }
    }
}

window["analitics"] = createAnalitics()