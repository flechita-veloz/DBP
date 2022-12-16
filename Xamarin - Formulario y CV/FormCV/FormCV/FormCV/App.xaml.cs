using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace FormCV
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new Formulario();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
