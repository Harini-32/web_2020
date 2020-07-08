package com.e.myapplication;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class homeActivity extends AppCompatActivity {
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home_activity);
    }
    public void logout(View view){
        Intent redirect= new Intent(homeActivity.this,MainActivity.class);
        startActivity(redirect);
    }
}