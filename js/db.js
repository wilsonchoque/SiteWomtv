
    const firebaseConfig = {
        databaseURL: "https://womtv-web-default-rtdb.firebaseio.com"
    }
    firebase.initializeApp(firebaseConfig)
    // aquí se crea la conexión con la base de datos
    const database = firebase.database()

   // ejecutar la función al hacer clic en el botón enviar
    const submit = document.querySelector('button')
    submit.onclick = () => sendData()

    // crea una función para enviar datos
    function sendData(){
        var name = document.querySelectorAll('input')[0]
        var email = document.querySelectorAll('input')[1]
        var fechaini = document.querySelectorAll('input')[2]
        var plan = document.querySelector('select')

        // establecer la ruta donde se almacenarán los datos
        var listRef = database.ref('Plan de servicio/')
        // necesitamos identificaciones únicas generadas por Firebase para mostrar los datos de la lista, así que
        // push() generará una identificación única
        var newRef = listRef.push()
        // ahora configure los datos en db en la ruta dada
        newRef.set({
            // ahora envia nuestros datos
            'name': name.value,
            'email': email.value,
            'plan': plan.value,
            'fechaini': fechaini.value,
        })
    }

