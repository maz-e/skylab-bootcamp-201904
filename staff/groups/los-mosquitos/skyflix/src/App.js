import React, { Component } from 'react'
import logic from './logic'
import i18n from './common/i18n'
import LanguageSelector from './components/language-selector'
import Landing from './components/Landing'
import Login from './components/Login'
import ChoosePlan from './components/ChoosePlan'
import Register from './components/Register'
import Home from './components/Home'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './App.sass'

library.add(faPlus,faThumbsUp)

class App extends Component {

    state = { lang: i18n.language, plan: null, error: null, name: null }

    handleLanguageChange = lang => this.setState({ lang: i18n.language = lang })

    handleRegister = (fullname, email, password, confirmPassword) => {

        try {
            logic.registerUser(fullname, email, password, confirmPassword, this.state.plan)
                .then(() => this.setState({error: null}, () => this.props.history.push('/login')))
                .catch(error => {
                    this.setState({ error: error.message })
                })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    componentDidMount() {
        logic.isUserLoggedIn &&
            logic.retrieveUser()
                .then(user =>
                    this.setState({ name: user.fullname })
                )
                .catch(error =>
                    this.setState({ error: error.message })
                )
    }

    handleLogin = (username, password) => {
        try {
            logic.loginUser(username, password)
                .then(() =>
                    logic.retrieveUser()
                )
                .then(user => this.setState({ name: user.fullname }, () => this.props.history.push('/home')))
                .catch(error =>
                    this.setState({ error: error.message })
                )
        } catch ({ message }) {
            this.setState({ error: message })
        }
    }

    handleSelectedPlan = (plan) => this.setState({ plan }, () => this.props.history.push('/signup/form'))

    handleRegisterNav = () => this.props.history.push('/signup')

    handleLoginNav = () => this.props.history.push('/login')

    handleLandingNav = () => this.props.history.push('/')

    handleLogout = () => {
        logic.logoutUser()
        this.props.history.push('/')
    }

    render() {
        const {
            state: { lang, error, name, plan },
            handleLoginNav,
            handleRegisterNav,
            handleLandingNav,
            handleLogin,
            handleRegister,
            handleLanguageChange,
            handleSelectedPlan,
            handleLogout
        } = this

        return <> 
            <section className="container app-container">
            <Switch>
                <Route exact path="/" render={() => logic.isUserLoggedIn ? <Redirect to='/home' /> : <Landing lang={lang} onLogin={handleLoginNav} onRegister={handleRegisterNav} onLanding={handleLandingNav}/>} />

                <Route path="/signup/form" render={() => logic.isUserLoggedIn ? <Redirect to='/home' /> :
                    plan ? <Register lang={lang} onRegister={handleRegister} plan={plan} error={error} /> : <Redirect to='/signup' />} />

                <Route path="/signup" render={() => logic.isUserLoggedIn ? <Redirect to='/home' /> : <ChoosePlan lang={lang} onSelectedPlan={handleSelectedPlan} />} />

                <Route path="/login" render={() => logic.isUserLoggedIn ? <Redirect to='/home' /> : <Login lang={lang} onLogin={handleLogin} error={error} />} />

                <Route path='/home' render={() => logic.isUserLoggedIn ? <Home lang={lang} name={name} onLogout={handleLogout} /> : <Redirect to='/' />} />

                <Redirect to='/' />
            </Switch>

            <LanguageSelector lang={lang} onLanguageChange={handleLanguageChange} /> 
            </section>
        </>
    }
}

export default withRouter(App)