package shripad.cadacproject.findyourmeal.activity;

import androidx.appcompat.app.AppCompatActivity;
import shripad.cadacproject.findyourmeal.R;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

public class DetailActivity extends AppCompatActivity {

    TextView name;
    TextView address;
    TextView contact;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);

        name=findViewById(R.id.name);
        address=findViewById(R.id.address);
        contact=findViewById(R.id.contact);

        Intent intent=getIntent();

        name.setText(intent.getStringExtra("name"));
        address.setText(intent.getStringExtra("address"));
        contact.setText(intent.getStringExtra("contact"));
        Log.e("name",intent.getStringExtra("name"));

    }
}
