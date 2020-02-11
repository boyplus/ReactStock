import React from 'react';
import { connect } from 'react-redux';
import { updateRoute } from '../actions';
import ProfileCard from './ProfileCard';
class Home extends React.Component {
    componentDidMount() {
        this.props.updateRoute(this.props.location.pathname);
    }
    renderUser = () => {
        console.log(this.props.profile);
        if (this.props.profile) {
            return (
                <div>
                    <h3>Hello, {this.props.profile.name}</h3>
                    <div class="ui cards">
                        {/* <ProfileCard
                            name={this.props.profile.name}
                            imageUrl={this.props.profile.imageUrl}
                            email={this.props.profile.email}
                        ></ProfileCard> */}
                    </div>
                </div>
            );
        } else {
            return <div>Please Signed In with google first!</div>;
        }
    };
    render() {
        return (
            <div>
                <div className="ui header">Welcome to React Stock</div>
                {this.renderUser()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { profile: state.auth.profile };
};

export default connect(mapStateToProps, { updateRoute })(Home);
