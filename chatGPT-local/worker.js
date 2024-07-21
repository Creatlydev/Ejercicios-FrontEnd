import { WebWorkerMLCEngineHandler  } from "https://esm.run/@mlc-ai/web-llm";

onmessage = (e) => {
    console.log('Worker: message recieved from main thread')

    if (e.data.name === 'Hello') {
        console.log('Worker: sending message to main thread')
        postMessage({ name: 'Hello Back' })
    }
}

// const engine = new MLCEngine()
const handler = new WebWorkerMLCEngineHandler () 

onmessage = msg => {
    handler.onmessage(msg)
}