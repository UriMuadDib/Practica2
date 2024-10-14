package com.equipo6.practica2

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import javax.security.auth.callback.PasswordCallback

class MainActivity : AppCompatActivity() {

   lateinit var usernameInput : EditText
   lateinit var passwordInput: EditText
   lateinit var loginBtn : Button
   lateinit var signupBtn : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        usernameInput = findViewById<EditText>(R.id.username_input)
        passwordInput = findViewById<EditText>(R.id.password_input)
        loginBtn = findViewById<Button>(R.id.login_btn)
        signupBtn = findViewById<Button>(R.id.signup_btn)

        loginBtn.setOnClickListener {
            val username = usernameInput.text.toString()
            val password = passwordInput.text.toString()
            if(username.isNotEmpty() and password.isNotEmpty()){
                val intent = Intent(this, OpenDisplay::class.java)
                startActivity(intent)
            }
        }

        signupBtn.setOnClickListener {
            val intent = Intent(this, SignUp::class.java)
            startActivity(intent)
        }

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }
}